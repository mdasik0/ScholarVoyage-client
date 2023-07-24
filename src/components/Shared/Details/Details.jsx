import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../Title/Title";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const {
    collegeImage,
    collegeName,
    admissionDates,
    admissionProcess,
    researchHistory,

    eventDetails,
    eventFacilities,
    numberOfResearch,
    researchWorks,
    sportCategories,
    sportFacilities,
  } = data;

  console.log(data);

  useEffect(() => {
    fetch(`https://college-admission-server-omega.vercel.app/allColleges/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="">
      <div className="text-center my-10">
        <Title
          firstTitle={"Details"}
          secondTitle={"Full college Details of a single college in here"}
        ></Title>
      </div>
      <div className="flex gap-6 justify-center items-center">
        <div className="w-[500px] h-full">
          <img
            className="w-full h-full object-cover"
            src={collegeImage}
            alt=""
          />
        </div>
        <div className="w-1/2">
          <h2 className="poppins text-xl md:text-3xl font-bold">
            {collegeName}
          </h2>
          <div className="my-10 text-sm md:text-[16px]">
            <h4 className="mt-2">
              <span className="font-bold">Admission Date</span>:{" "}
              {admissionDates}
            </h4>
            <h4 className="mt-2">
              <span className="font-bold">Admission Process</span>:{" "}
              {admissionProcess}
            </h4>
            <h4 className="mt-2">
              <span className="font-bold">Sport Categories</span>:{" "}
              {sportCategories}
            </h4>
            <h4 className="mt-2">
              <span className="font-bold">Sport Facilities</span>:{" "}
              {sportFacilities}
            </h4>
            <h4 className="mt-2">
              <span className="font-bold">Event Details</span>: {eventDetails}
            </h4>
            <h4 className="mt-2">
              <span className="font-bold">Event Facilities</span>:{" "}
              {eventFacilities}
            </h4>
            <h4 className="mt-2">
              <span className="font-bold">Number of Researches</span>:{" "}
              {numberOfResearch}
            </h4>
            <h4 className="mt-2">
              <span className="font-bold">Research Works</span>: {researchWorks}
            </h4>
            <h4 className="mt-2">
              <span className="font-bold">Research History</span>:{" "}
              {researchHistory}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
