import Title from "../../../Shared/Title/Title";
import ResearchPaperCard from "../ResearchPaperCard/ResearchPaperCard";

const ResearchPaper = () => {
    return (
        <div className="lg:w-[1400px] mx-auto w-full my-20 ">
            <Title firstTitle={'Research Papers'} secondTitle={'Explore Inspiring Research Papers by Our Talented Students (Recomanded) '}></Title>
            <div className="my-20 grid md:grid-cols-3 grid-cols-1">
                <ResearchPaperCard></ResearchPaperCard>
                <ResearchPaperCard></ResearchPaperCard>
                <ResearchPaperCard></ResearchPaperCard>
            </div>
        </div>
    );
};

export default ResearchPaper;