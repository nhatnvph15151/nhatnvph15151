import Header from "../components/header";
import NewsList from "../components/newsList";

const NewsPage = {
    render() {
        return `
        ${Header.render()}
            <h1>News Page</h1>
            ${NewsList.render()}
        `;
    },
};
export default NewsPage;