import Navbar from "./Navbar";
import Footer from "./Footer";

const SiteShell = ({ site, children }) => {
  return (
    <div className="min-h-screen bg-sunset">
      <Navbar brand={site?.brand} />
      <main>{children}</main>
      <Footer site={site} />
    </div>
  );
};

export default SiteShell;
