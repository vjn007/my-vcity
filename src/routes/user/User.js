import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../../pages/beforeLogin/main/Main";
import Home from "../../pages/beforeLogin/home/Home";

const User = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
        </Routes>
    </>
  );
};

export default User;
