import React from "react";
import "./utils/css/app.css";

const App = () => {
  return (
    <>
      <div className="App">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start align-items-center text-black bg-white">
            <h1>my vcity header</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 d-flex justify-content-start align-items-center text-white bg-primary mainPageHeight">
            <h1>my vcity sideBar</h1>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center text-black bg-light mainPageHeight">
            <h1>my vcity Content</h1>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center text-white bg-success">
                <div className="">
                  <h1>Sign In</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center text-white bg-warning">
                <div className="">
                  <h1>Sign Up</h1>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9"></div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-white bg-danger">
            <h1>my vcity scrollToTop</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center text-white bg-dark">
            <h1>my vcity Footer</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
