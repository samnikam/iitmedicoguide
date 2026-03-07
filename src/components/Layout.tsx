import { Outlet } from "react-router-dom";
import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

const Layout = () => (
  <div className="flex min-h-screen flex-col">
    <AnnouncementBar />
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
    <BackToTop />
  </div>
);

export default Layout;
