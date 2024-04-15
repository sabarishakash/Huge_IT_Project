import React,{useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Login";
// import View from "./view";
import Dashboard from "./pages/Dashboard"
import About from "./pages/About";
import Analytics from "./pages/Analytics";
import Comment from "./pages/Comments";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Sidebar from "./components/Sidebar";

const Main = () => {
  const [show, setshow] = useState(false);
  const handleLoginSuccess = () => {
    setshow(true);
  };
  const handleLogOut=()=>{
    setshow(false);
  }
  return (
   
    <div>
      <BrowserRouter>
      
      {show ? (
           
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/App" element={<App />} /> */}
          {/* <Route path="view" element={<View />} /> */}
           {/* <Route path="/" element={<Dashboard  />} /> */}
           <Route path="/" element={<Dashboard handleLogOut1={handleLogOut}/>} />
           <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/About" element={<About />} />
          <Route path="Analytics" element={<Analytics />} />
          <Route path="/Comment" element={<Comment />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/ProductList" element={<ProductList />} />
           
        </Routes>
       
         ) : (
          <Routes>
          <Route
            path="/"
            element={<Login onLoginSuccess={handleLoginSuccess} />}

          />
          <Route path="/App" element={<App />} />

        
        </Routes>
      )}
      </BrowserRouter>
      </div>
   
  );
};

export default Main;

