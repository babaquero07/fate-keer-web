import NavBar from "../Molecules/NavBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
      {/* <Footer /> */}
      <footer className="debug">Footer</footer>
    </>
  );
};

export default Layout;
