import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "./components/homePage/navBar";
import HomePage from "./components/homePage/homePage";
import AboutUs from "./components/aboutUs/aboutUs";
import OurServices from "./components/ourServices/ourServices";
import Footer from "./components/homePage/footer";
import Careers from "./components/careerPage/Career";
import Projects from "./components/projects/project";
import WebDevKnowMore from "./components/ourServices/webdevKnowMore";
import Insights from "./components/Insights/Insights";
import QuotePage from "./components/quote/QuotePage";
import Blog1 from "./components/Insights/blog1";
import Blog2 from "./components/Insights/blog2";
import Blog3 from "./components/Insights/blog3";
import Blog4 from "./components/Insights/blog4";
import Blog5 from "./components/Insights/blog5";
import Blog6 from "./components/Insights/blog6";
import Blog7 from "./components/Insights/blog7";
import Blog8 from "./components/Insights/blog8";
import Blog9 from "./components/Insights/blog9";
import Blog10 from "./components/Insights/blog10";
import Blog11 from "./components/Insights/blog11";
import Blog12 from "./components/Insights/blog12";
import ExplorePage from "./components/explore/explorepage";
import Portfolio from "./components/Portfolio/Portfolio";
import Form from "./components/homePage/form";


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/product" element={<Projects />} />
        <Route path="/knowmore" element={<WebDevKnowMore />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/blog/1" element={<Blog1 />} />
        <Route path="/blog/2" element={<Blog2 />} />
        <Route path="/blog/3" element={<Blog3 />} />
        <Route path="/blog/4" element={<Blog4 />} />
        <Route path="/blog/5" element={<Blog5 />} />
        <Route path="/blog/6" element={<Blog6 />} />
        <Route path="/blog/7" element={<Blog7 />} />
        <Route path="/blog/8" element={<Blog8 />} />
        <Route path="/blog/9" element={<Blog9 />} />
        <Route path="/blog/10" element={<Blog10 />} />
        <Route path="/blog/11" element={<Blog11 />} />
        <Route path="/blog/12" element={<Blog12 />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Form />} />
      </Routes>
      <Footer />
    </Router>
  );
}
