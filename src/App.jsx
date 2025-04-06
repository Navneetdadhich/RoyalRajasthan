import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar"

import Landing from "./pages/Landing"
import Jaipur from "./pages/Jaipur"
import Jodhpur from "./pages/Jodhpur"
import Jaisalmer from "./pages/Jaisalmer"
import Udaipur from "./pages/Udaipur"
import Kishangarh from "./pages/Kishangarh"
import Chittorgarh from "./pages/Chittorgarh"

function App() {

  return (
    <>
      <div className='h-full w-full flex flex-col bg-amber-100 gap-10'>
            <Navbar/>
            {/* <Hero/> */}
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/jaipur" element={<Jaipur/>}/>
                <Route path="/jodhpur" element={<Jodhpur/>}/>
                <Route path="/jaisalmer" element={<Jaisalmer/>}/>
                <Route path="/udaipur" element={<Udaipur/>}/>
                <Route path="/Kishangarh" element={<Kishangarh/>}/>
                <Route path="/chittorgarh" element={<Chittorgarh/>}/>

               

            </Routes>
            {/* <Landing/> */}
        </div>
    </>
  )
}

export default App
