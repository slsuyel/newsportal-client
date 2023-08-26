
import { Outlet } from "react-router-dom";

import Sidebar from "../dashboards/Sidebar";
import Footer from "../dashboards/Footer";
import Navbar from "../dashboards/Navbar";

export default function WithNavbar() {
  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
}
