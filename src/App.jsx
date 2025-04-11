import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import Landing from "./pages/Landing";
import Jaipur from "./pages/Jaipur";
import Jodhpur from "./pages/Jodhpur";
import Jaisalmer from "./pages/Jaisalmer";
import Udaipur from "./pages/Udaipur";
import Chittorgarh from "./pages/Chittorgarh";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Ajmer from "./pages/Ajmer";
import Desert from "./pages/Desert";
import Food from "./pages/Food";
import Culture from "./pages/Culture";
import Nature from "./pages/Nature";
import Heritage from "./pages/Heritage";

function App() {
 
const HomeLayout = () => (
  <div className="min-h-screen w-full flex flex-col bg-amber-100  relative overflow-x-hidden">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

  return (
    <>
      <div className="min-h-screen w-full flex flex-col bg-amber-100 gap-10 relative overflow-x-hidden">
        
        <Routes>
          
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="jaipur" element={<Jaipur />} />
          <Route path="jodhpur" element={<Jodhpur />} />
          <Route path="jaisalmer" element={<Jaisalmer />} />
          <Route path="udaipur" element={<Udaipur />} />
          <Route path="ajmer" element={<Ajmer/>} />
          <Route path="chittorgarh" element={<Chittorgarh />} />
          <Route path="desert" element={<Desert />} />
          <Route path="food" element={<Food />} />
          <Route path="nature" element={<Nature />} />
          <Route path="culture" element={<Culture />} />
          <Route path="heritage" element={<Heritage />} />
        </Route>
        </Routes>
        
      </div>
    </>
  );
}

export default App;
