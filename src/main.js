import Navigo from "navigo";
import Header from "./components/header";
import AboutPage from "./pages/about";
import admin from "./pages/admin/addNews";
import DetailNew from "./pages/admin/detailNew";
import DetailNewsPage from "./pages/detailNews";
import dashboard from "./pages/doashboard";

import HomePage from "./pages/home";
import NewsPage from "./pages/news";
import Signin from "./pages/signin";
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
    },
    "/signin": () => {
        print(Signin.render());
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