import Title from "../../../Shared/Title/Title";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const EditProfile = () => {
  const { user, updateYourEmailAdress, updateName } = useContext(AuthContext);
  const [data, setData] = useState([]);

  //   get user data from server
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/userData/${user.email}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => setData(data))
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [user?.email]);

  console.log(data._id);
  // update data in firebase
  const handleUpdateProfile = (e) => {
    e.preventDefault(); // Corrected to e.preventDefault()

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const university = form.University.value;
    const address = form.Address.value;
    console.log(name, email, university, address);

    const updatedData = { university, address };
    fetch(`http://localhost:5000/userData/${data?._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire("Updated!", "Your Profile has been updated", "success");
        }
        setTimeout(() => {
            location.reload();
        }, 2000);
      });

    updateName(name).then(() => {
        const updatedData = { name };
        fetch(`http://localhost:5000/userData/${data?._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              Swal.fire("Updated!", "Your Profile has been updated", "success");
            }
            setTimeout(() => {
                location.reload();
            }, 3000);
          });
    });

    console.log(data._id);

    updateYourEmailAdress(email)
      .then(() => {
        const updatedData = { email };
        fetch(`http://localhost:5000/userData/${data?._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              Swal.fire("Updated!", "Your Profile has been updated", "success");
            }
            setTimeout(() => {
                location.reload();
            }, 2000);
          });
      })
      .catch((error) => {
        if (error.message == "Firebase: Error (auth/requires-recent-login).") {
          Swal.fire(
            "Email Update Failed!",
            "Old Login Please Login Recently To Make changes",
            "warning"
          );
        }
        console.log(error.message);
        setTimeout(() => {
            location.reload();
        }, 2000);
      });
  };

  return (
    <div className="p-20 flex flex-col items-center ">
      <Title firstTitle={"Edit Profile"} secondTitle={'please change one data at a time Updating many data may cause problem'}></Title>
      <div className="bg-slate-300 p-10 rounded-xl mt-10">
        <form
          onSubmit={handleUpdateProfile}
          className="flex flex-col w-[300px]"
        >
          {/* name */}
          <label className="text-sm font-bold mb-3" htmlFor="Name">
            Name
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
            Email
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
              name="Address"
              placeholder={"Your Address Here"}
              defaultValue={data?.address || ""}
              type="text"
            />
          </label>
          {/* University */}
          <label className="text-sm font-bold mb-3 " htmlFor="Name">
            University
            <input
              className="px-2 w-full rounded bg-white py-2"
              name="University"
              placeholder={"Your University name Here"}
              defaultValue={data?.university || ""}
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

export default EditProfile;
