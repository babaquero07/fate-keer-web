import { Outlet } from "react-router";
import NavBar from "../Molecules/NavBar";

const Layout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
      <footer className="debug">Footer</footer>
    </>
  );
};

export default Layout;
