import React from "react";
import SignIn from "../signIn/SignIn";
import SignUp from "../signUp/SignUp";

const Main = () => {
  return (
    <>
      <div className="container d-flex justify-content-center align-item-center">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center align-item-center">
                <SignIn />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <SignUp />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
