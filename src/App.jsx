import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import Landing from "./pages/Landing";
import Jaipur from "./pages/Jaipur";
import Jodhpur from "./pages/Jodhpur";
import Jaisalmer from "./pages/Jaisalmer";
import Udaipur from "./pages/Udaipur";
import Kishangarh from "./pages/Kishangarh";
import Chittorgarh from "./pages/Chittorgarh";
import Footer from "./components/Footer";

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
          <Route path="jaipur" element={<Jaipur />} />
          <Route path="jodhpur" element={<Jodhpur />} />
          <Route path="jaisalmer" element={<Jaisalmer />} />
          <Route path="udaipur" element={<Udaipur />} />
          <Route path="kishangarh" element={<Kishangarh />} />
          <Route path="chittorgarh" element={<Chittorgarh />} />
        </Route>
        </Routes>
        
      </div>
    </>
  );
}

export default App;
