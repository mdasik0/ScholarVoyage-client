import FeaturedSection from "../FeaturedSection/FeaturedSection";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import ResearchPaper from "../ResearchPaper/ResearchPaper";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <FeaturedSection></FeaturedSection>
            <Gallery></Gallery>
            <ResearchPaper></ResearchPaper>
        </div>
    );
};

export default Home;