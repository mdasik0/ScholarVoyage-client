import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const CollegesCard = ({ data }) => {
  console.log(data);
  const {
    collegeImage,
    collegeName,
    collegeRating,

    admissionDates,
    numberOfResearch,
    _id,
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
            <h4 className="mb-3 flex items-center">
              Ratings :{" "}
              <span className="my-3">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={collegeRating}
                  readOnly
                />
              </span>
            </h4>
            <h4 className="mb-3">Admission Date: {admissionDates}</h4>
            <h4 className="mb-3">
              Number of research: {numberOfResearch} Researches in Total
            </h4>
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

export default CollegesCard;
