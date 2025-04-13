import { Routes, Route, Outlet } from "react-router-dom";
import {  SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
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
import AiSearch from "./pages/AiSearch";

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  const HomeLayout = () => (
    <div className="min-h-screen w-full flex flex-col bg-amber-100 relative overflow-x-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );

  // Create protected route wrapper
  const ProtectedRoute = ({ children }) => {
    return (
      <>
        <SignedIn>{children}</SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </>
    );
  };

  return (
    
      <div className="min-h-screen w-full flex flex-col bg-amber-100 gap-10 relative overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Landing />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            
            {/* Protected Routes */}
            <Route
              path="jaipur"
              element={
                // <ProtectedRoute>
                  <Jaipur />
                // </ProtectedRoute>
              }
            />
            <Route path="jodhpur" element={<Jodhpur />} />
            <Route path="jaisalmer" element={<Jaisalmer />} />
            <Route path="udaipur" element={<Udaipur />} />
            <Route path="ajmer" element={<Ajmer />} />
            <Route path="chittorgarh" element={<Chittorgarh />} />
            <Route path="desert" element={<Desert />} />
            <Route path="food" element={<Food />} />
            <Route path="nature" element={<Nature />} />
            <Route path="culture" element={<Culture />} />
            <Route path="heritage" element={<Heritage />} />
            <Route path="ai" element={<ProtectedRoute><AiSearch /></ProtectedRoute>} />
          </Route>
        </Routes>
      </div>
   
  );
}

export default App;
