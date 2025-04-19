import React from "react";
import "./utils/css/app.css";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/Sidebar";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <div className="App">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start align-items-center text-black bg-white">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 d-flex justify-content-start align-items-center text-white bg-primary mainPageHeight">
            <SideBar />
          </div>
          <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center text-black bg-light mainPageHeight">
            <h1>my vcity Content</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center text-white bg-success mainPageHeight">
                <div className="">
                  <h1>Sign In</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center text-white bg-warning mainPageHeight">
                <div className="">
                  <h1>Sign Up</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9"></div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-white bg-danger">
            <ScrollToTop />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center text-white bg-dark">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
