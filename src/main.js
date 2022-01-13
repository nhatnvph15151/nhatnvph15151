import Navigo from "navigo";
import Header from "./components/header";
import AboutPage from "./pages/about";
import admin from "./pages/admin/addNews";

import DetailNewsPage from "./pages/detailNews";
import dashboard from "./pages/doashboard";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";

import Signup from "./pages/sigup";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    // document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/news": () => {
        print(NewsPage.render());
    },
    "/sigup": () => {
        print(Signup.render());
    }
    ,
    "/dashboard": () => {
        print(dashboard.render());
    },
    "/admin/news": ()=>{
        print (admin.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
});
router.resolve();