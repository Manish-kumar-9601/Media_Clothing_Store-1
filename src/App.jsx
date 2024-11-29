//Components
import Navbar from "./Navbar.jsx";
import Bestseller from "./Bestseller.jsx";
import Testimonies from "./Testimonies.jsx";
import {HomePage} from "./HomePage.jsx";
import ClothInfo from "./ClothInfo.jsx";
// import Tempdata from "./assets/tempData.json"
//Libraries
import { Routes, Route  } from "react-router-dom";
import ErrorPage from "./ErrorPage";
//Stylesheet
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact index path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/bestseller" element={<Bestseller />}></Route>
        <Route path="/clothinfo"  element={<ClothInfo />}></Route>
        <Route path="/clothinfo/:id"  element={<ClothInfo />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
