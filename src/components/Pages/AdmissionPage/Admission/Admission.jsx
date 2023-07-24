import { Link } from "react-router-dom";
import useColleges from "../../../../Hooks/useColleges";
import Title from "../../../Shared/Title/Title";

const Admission = () => {
  const [colleges] = useColleges();

    return (
        <div>
            <div className="lg:w-[1400px] mx-auto w-full my-20">
      <Title
        firstTitle={"Admission"}
        secondTitle={"Complete the admission form to join the College"}
      ></Title>
      {
        colleges ? '' : <span className="loading loading-spinner loading-lg"></span>
      }
      <div className="mt-20 grid lg:grid-cols-3 grid-cols-1 gap-10">
        {colleges.map((college) => (
            <div className="p-3 bg-slate-200 rounded-lg" key={college?._id}>
                <img className="h-[250px] rounded-lg object-cover w-full" src={college.collegeImage} alt="" />
                <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold poppins my-3">{college.collegeName}</h1>
                <Link to={`/AdmissionForm/${college._id}`}>
                <button className="btn btn-md mt-3 bg-blue-950 text-white hover:bg-blue-900">Admission Form</button>
                </Link>
                </div>
            </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default Admission;