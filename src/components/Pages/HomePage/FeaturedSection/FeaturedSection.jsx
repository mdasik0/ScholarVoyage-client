import useColleges from "../../../../Hooks/useColleges";
import Title from "../../../Shared/Title/Title";
import Card from "../Card/Card";

const FeaturedSection = () => {
    const [colleges] = useColleges()
    const FeaturedSection = colleges.slice(0,3)
    console.log(FeaturedSection)
  return (
    <div className="lg:w-[1400px] mx-auto w-full my-20">
      <Title
        firstTitle={"Featured Colleges"}
        secondTitle={"Featured colleges by website"}
      ></Title>
      <div className="mt-20 grid lg:grid-cols-3 grid-cols-1">
        {
            FeaturedSection.map(college => <Card key={college._id} data={college}></Card>)
        }
        
      </div>
    </div>
  );
};

export default FeaturedSection;
