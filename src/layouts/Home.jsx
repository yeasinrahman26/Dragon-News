import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/Layout-component/LeftNavbar";
import RightNavbar from "../components/Layout-component/RightNavbar";
import NavBar from "../components/NavBar";

const Home = () => {
    return (
      <div className="font-poppins w-8/12 mx-auto">
        <header>
          <Header></Header>
          <section className=" ">
            <LatestNews></LatestNews>
          </section>
        </header>
        <nav className=" ">
          <NavBar></NavBar>
        </nav>
        <main className=" mt-5 grid gap-3 grid-cols-10">
          <aside className="col-span-2 "><LeftNavbar></LeftNavbar></aside>
          <section className="col-span-6 "><Outlet></Outlet></section>
          <aside className="col-span-2 "><RightNavbar></RightNavbar> </aside>
        </main>
      </div>
    );
};

export default Home;