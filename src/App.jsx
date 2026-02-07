import { Routes, Route } from "react-router-dom";
import SiteShell from "./components/SiteShell";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Schedule from "./pages/Schedule";
import NotFound from "./pages/NotFound";
import { api } from "./lib/api";
import { useData } from "./lib/useData";
import { SiteContext } from "./lib/SiteContext";

const App = () => {
  const siteQuery = useData(api.site, []);

  return (
    <SiteContext.Provider value={siteQuery.data}>
      <SiteShell site={siteQuery.data}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SiteShell>
    </SiteContext.Provider>
  );
};

export default App;
