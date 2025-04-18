import React from "react";

const App = () => {
  return (
    <>
      <div className="App">
        <div className="row">
          <h1>my vcity</h1>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="d-flex justify-content-center bg-primary text-white">
                    <h1>Buyer</h1>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="d-flex justify-content-center bg-success text-white">
                    <h1>Seller</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
