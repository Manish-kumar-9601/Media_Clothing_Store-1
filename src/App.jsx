//Components
import Navbar from "./Navbar";
import Bestseller from "./Bestseller";
import Testimonies from "./Testimonies";
import HomePage from "./HomePage";
// import Tempdata from "./assets/tempData.json"
//Libraries
import { Routes, Route, BrowserRouter } from "react-router-dom";
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
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
