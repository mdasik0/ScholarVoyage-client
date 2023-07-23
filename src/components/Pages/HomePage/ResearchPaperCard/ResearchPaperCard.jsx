const ResearchPaperCard = () => {
  return (
    <div className="w-[400px] bg-yellow-500 rounded-lg border-2">
      {/* card image */}
      <div className="p-3">
        <img
          className="rounded-lg w-full h-full object-cover"
          src="/researchPapers/plant-defense.jpg"
          alt=""
        />
      </div>
      {/* card info */}
      <div className="p-3">
        <h3 className="text-2xl font-bold website-title">
          Plant Defense against Herbivorous Pests: Exploiting Resistance...
        </h3>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illum
          nisi ipsam cumque unde voluptatum consequuntur quidem, repellat
          voluptates...
        </h3>
        <button className="btn mt-3 font-bold ">Visit</button>
      </div>
    </div>
  );
};

export default ResearchPaperCard;
