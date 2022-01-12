
import Banner from "../components/banner";
import NewsList from "../components/newsList";
import Header from "../components/header";
import footer from "../components/footer";


const HomePage = {
    render() {
        return /* html */`
            <div class="banner">
            ${Header.render()}
            ${Banner.render()}
            </div>
            <div>
                ${NewsList.render()}
            </div>
            
            
        `;
    },
};
export default HomePage;