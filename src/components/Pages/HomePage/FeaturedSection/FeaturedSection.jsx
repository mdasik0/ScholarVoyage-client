import Title from "../../../Shared/Title/Title";
import Card from "../Card/Card";

const FeaturedSection = () => {
  return (
    <div className="lg:w-[1400px] mx-auto w-full my-20">
      <Title
        firstTitle={"Featured Colleges"}
        secondTitle={"Featured colleges by website"}
      ></Title>
      <div className="mt-20 grid lg:grid-cols-3 grid-cols-1">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default FeaturedSection;
