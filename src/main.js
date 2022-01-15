import Navigo from "navigo";
import AboutPage from "./pages/about";
import admin from "./pages/admin/news";
import dashboard from "./pages/admin/doashboard";
import DetailNewsPage from "./pages/detailNews";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";
import Signup from "./pages/signup";
import signIn from "./pages/signIn";
import addNew from "./pages/admin/addNew";

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
    "/signup": () => {
        print(Signup.render());
    },
    "/signin": () => {
        print(signIn.render());
    }
    ,
    "/admin/dashboard": () => {
        print(dashboard.render());
    },
    "/admin/news": ()=>{
        print (admin.render());
    },
    "/admin/addNew": ()=>{
        print(addNew.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
});
router.resolve();