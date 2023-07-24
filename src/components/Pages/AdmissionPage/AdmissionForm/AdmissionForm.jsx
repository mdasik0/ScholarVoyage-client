import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Title from "../../../Shared/Title/Title";
import Swal from "sweetalert2";

const AdmissionForm = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [data, setData] = useState([]);
  // const {
  //     collegeImage,
  //     collegeName,
  //     admissionDates,
  //     admissionProcess,
  //     researchHistory,

  //     eventDetails,
  //     eventFacilities,
  //     numberOfResearch,
  //     researchWorks,
  //     sportCategories,
  //     sportFacilities,
  //   } = data;

  console.log(data);

  useEffect(() => {
    fetch(`https://college-admission-server-omega.vercel.app/allColleges/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleAdmissionForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const name = form.name.value;
    const address = form.address.value;
    const subject = form.subject.value;
    const photo = form.photo.value;

    const formdata = {
      email,
      phone,
      date,
      name,
      address,
      subject,
      photo,
      collegeId: data._id,
    };
    fetch("https://college-admission-server-omega.vercel.app/admissionData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formdata),
    }).then(() => {
      Swal.fire("Good job!", `Form has been submitted!`, "success");
    });
  };

  return (
    <div className="p-20 flex flex-col items-center ">
      <Title
        firstTitle={"Admission Form"}
        secondTitle={"Admission Form for Candidates"}
      ></Title>
      <div className="bg-slate-300 p-10 rounded-xl mt-10">
        <form
          onSubmit={handleAdmissionForm}
          className="flex flex-col w-[300px]"
        >
          {/* name */}
          <label className="text-sm font-bold mb-3" htmlFor="Name">
            Candidate Name
            <input
              className="px-2 w-full rounded bg-white py-2"
              name="name"
              required
              placeholder={"Your New name here"}
              defaultValue={user?.displayName || ""}
              type="text"
            />
          </label>
          {/* email */}
          <label className="text-sm font-bold mb-3 " htmlFor="Name">
            Candidate Email
            <input
              className="px-2 w-full rounded bg-white py-2"
              name="email"
              required
              placeholder={"Your New email here"}
              defaultValue={user?.email || ""}
              type="email"
            />
          </label>
          {/* Address */}
          <label className="text-sm font-bold mb-3 " htmlFor="Name">
            Address
            <input
              className="px-2 w-full rounded bg-white py-2"
              name="address"
              placeholder={"Your Address Here"}
              defaultValue={data?.address || ""}
              type="text"
            />
          </label>
          {/* University */}
          <label className="text-sm font-bold mb-3 " htmlFor="Name">
            Subject
            <input
              className="px-2 w-full rounded bg-white py-2"
              name="subject"
              placeholder={"Your subject Here"}
              defaultValue={data?.university || ""}
              type="text"
            />
          </label>
          <label className="text-sm font-bold mb-3 " htmlFor="Name">
            phone Number
            <input
              className="px-2 w-full rounded bg-white py-2"
              name="phone"
              placeholder={"Your Phone number Here"}
              defaultValue={data?.university || ""}
              type="text"
            />
          </label>
          <label className="text-sm font-bold mb-3 " htmlFor="Name">
            Birth Date
            <input
              className="px-2 w-full rounded bg-white py-2"
              name="date"
              placeholder={"Your birthday Here"}
              defaultValue={data?.university || ""}
              type="date"
            />
          </label>
          <label className="text-sm font-bold mb-3 " htmlFor="Name">
            Photo Url
            <input
              className="px-2 w-full rounded bg-white py-2"
              name="photo"
              placeholder={"Your image here Here"}
              defaultValue={user?.photoURL || ""}
              type="text"
            />
          </label>
          <button
            type="submit"
            className="btn mt-3 hover:bg-blue-950 hover:text-white duration-500"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
