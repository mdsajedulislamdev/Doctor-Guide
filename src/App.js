import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Service from "./Components/Service/Service";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Info from "./Components/Info/Info";
import MainBody from "./Components/MainBody/MainBody";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<MainBody></MainBody>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/info" element={<Info></Info>}></Route>
      </Routes>
    </div>
  );
}

export default App;
