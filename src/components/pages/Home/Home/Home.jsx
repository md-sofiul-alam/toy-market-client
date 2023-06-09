
import Title from "../../../../hooks/Title";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Comments from "../Comments/Comments";
import Gallery from "../Gallery/Gallery";
import Info from "../Info/Info";



const Home = () => {
    Title("Home")
    return (
        <div>
            <Banner/>
            <Gallery/>
            <Categories/>
            <Comments/>
            <Info/>
        </div>
    );
};

export default Home;