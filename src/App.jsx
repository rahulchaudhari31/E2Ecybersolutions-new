import { lazy, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Preloader from "./components/Preloader.jsx";
import { servicePages } from "./data/siteContent.js";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail.jsx"));
const Service = lazy(() => import("./pages/Service.jsx"));
const Portfolio = lazy(() => import("./pages/Portfolio.jsx"));
const CaseStudy = lazy(() => import("./pages/CaseStudy.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showPreloader ? (
          <Preloader onFinished={() => setShowPreloader(false)} />
        ) : null}
      </AnimatePresence>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/index.php" element={<Navigate to="/" replace />} />
          <Route path="/about.php" element={<About />} />
          <Route path="/contact.php" element={<Contact />} />
          <Route path="/services.php" element={<Services />} />
          <Route path="/service-detail.php" element={<ServiceDetail />} />
          {servicePages.map((page) => (
            <Route key={page.path} path={page.path} element={<Service path={page.path} />} />
          ))}
          <Route path="/portfolio.php" element={<Portfolio />} />
          <Route path="/work.php" element={<Navigate to="/portfolio.php" replace />} />
          <Route path="/case-study.php" element={<CaseStudy />} />
          <Route path="/seo-optimization.php" element={<Navigate to="/seo.php" replace />} />
          <Route path="/content.php" element={<Navigate to="/content-writing.php" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
