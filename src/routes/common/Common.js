import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../../pages/beforeLogin/main/Main";
import Home from "../../pages/beforeLogin/home/Home";
import NoPageFound from "../../components/NoPageFound/NoPageFound";

const Common = () => {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </>
    );
};

export default Common;

// import React, { useState } from "react";
// import "./utils/css/app.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/header/Header";
// import SideBar from "./components/sidebar/Sidebar";
// import ScrollToTop from "./components/scrollToTop/ScrollToTop";
// import Footer from "./components/footer/Footer";
// import SignIn from "./pages/beforeLogin/signIn/SignIn";
// import SignUp from "./pages/beforeLogin/signUp/SignUp";
// import Main from "./pages/beforeLogin/main/Main";
// import Home from "./pages/beforeLogin/home/Home";
// import Common from "./routes/common/Common";
// import Admin from "./routes/admin/Admin";
// import User from "./routes/user/User";

// const App = ({ props }) => {
//   const [isVisible, setisVisable] = useState(false);

//   const onIsVisible = () => {
//     setisVisable(!isVisible);
//   };

//   return (
//     <>
//       <div className="App">
//         {isVisible ? (
//           <>
//             <div className="row">
//               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start align-items-center text-black bg-white">
//                 <Header />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 d-flex justify-content-start align-items-center text-white bg-primary mainPageHeight">
//                 <SideBar />
//               </div>
//               <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center text-black bg-light mainPageHeight">
//                 <Router>
//                   <Routes>
//                     <Route path="/" element={<Main />} />
//                     <Route path="/home" element={<Home />} />
//                   </Routes>
//                   <Common />
//                   <Admin />
//                   <User />
//                 </Router>
//               </div>
//             </div>
//           </>
//         ) : (
//           ""
//         )}

//         {!isVisible ? (
//           <div className="row">
//             <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
//               <div className="row">
//                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center text-white bg-success mainPageHeight">
//                   <div className="" onClick={onIsVisible}>
//                     <SignIn />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
//               <div className="row">
//                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center text-white bg-warning mainPageHeight">
//                   <div className="" onClick={onIsVisible}>
//                     <SignUp />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           ""
//         )}

//         {isVisible ? (
//           <>
//             <div className="row">
//               <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9"></div>
//               <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-white bg-danger">
//                 <ScrollToTop />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center text-white bg-dark">
//                 <Footer />
//               </div>
//             </div>
//           </>
//         ) : (
//           ""
//         )}
//       </div>
//     </>
//   );
// };

// export default App;
