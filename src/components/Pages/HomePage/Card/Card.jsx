import { Link } from "react-router-dom";
import "./Card.css";
const Card = ({ data }) => {
  console.log(data);
  const {
    collegeImage,
    collegeName,
    admissionDates,
    events,
    researchHistory,
    sports,
    _id
  } = data;
  return (
    <div className="h-full shadow-xl rounded-lg shadow-slate-400 w-full hover:scale-105 duration-500 p-3 hover:bg-slate-300 md:w-[350px] bg-slate-100 flex flex-col justify-between">
      <div>
        {/* image */}
        <div className="h-[220px]">
          <img className="w-full h-full rounded-lg" src={collegeImage} alt="" />
        </div>
        {/* info */}
        <div className="p-1 mt-3">
          {/* college name */}
          <h4 className="poppins font-bold text-xl">{collegeName}</h4>
          <div className="text-slate-700 poppins text-sm mt-3 font-bold">
            <h4 className="mb-3">Admission Date: {admissionDates}</h4>
            <h4 className="mb-3">Events: {events}</h4>
            <h4 className="mb-3">Research History: {researchHistory}</h4>
            <h4 className="mb-3">Sports: {sports}</h4>
          </div>
        </div>
      </div>
      <div className="main hover:text-white duration-500  ">
        <Link to={`/details/${_id}`}>
        <button className="button px-6 rounded-full">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
