import useColleges from "../../../../Hooks/useColleges";
import Title from "../../../Shared/Title/Title";
import CollegesCard from "../CollegesCard/CollegesCard";

const Colleges = () => {
  const [colleges] = useColleges();
  return (
    <div className="lg:w-[1400px] mx-auto w-full my-20">
      <Title
        firstTitle={"Colleges"}
        secondTitle={"All the colleges available in the website"}
      ></Title>
      {
        colleges ? '' : <span className="loading loading-spinner loading-lg"></span>
      }
      <div className="mt-20 grid lg:grid-cols-3 grid-cols-1 gap-10">
        {colleges.map((college) => (
          <CollegesCard key={college._id} data={college}></CollegesCard>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
