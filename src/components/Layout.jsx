import { Outlet } from "react-router-dom";
import Navbar from "./NavbarSection/Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="text-white font-poppins">
      <Navbar />
      
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
