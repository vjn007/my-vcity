import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import "./utils/css/app.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Footer from "./components/footer/Footer";
import SideBar from "./components/sidebar/Sidebar";
import Common from "./routes/common/Common";

const App = () => {
  const { darkMode, colorTheme } = useSelector((state) => state.theme);

  useEffect(() => {
    const root = document.getElementById("root");
    root.className = "";
    root.classList.add(
      darkMode ? "dark-mode" : "light-mode",
      `${colorTheme}-theme`
    );
  }, [darkMode, colorTheme]);

  return (
    <>
      <Router>
        <Header />
        <SideBar />
        <div className="myVCityApp">
         <Common />
        </div>
        <ScrollToTop />
        <Footer />
      </Router>
    </>
  );
};

export default App;
