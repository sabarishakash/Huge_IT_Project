import axios from "axios";
import React, { useState } from "react";
import { login_url } from "./URL/url";
import { Link, useNavigate } from "react-router-dom";
import App from "./App";

import "./Login.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = ({onLoginSuccess}) => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  // const [collect, setcollect] = useState([]);

  const login_data = async () => {
    await axios
      .post(login_url, {
        name,
        password,
      })
      .then((res) => {
        console.log(res.data.message);
        if (res.data.message === "login success") {
        onLoginSuccess()
        } else {
          alert(" not valid");
        }
      });
  };

  return (
    
    
     <div className="container nm mt-5">
      <div className="row justify-content-center mt-5">
      <div className="col-lg-4" >
      <div className="rounded shadow p-4 " style={{backgroundColor:"wheat"}}>
     <form>
         <h4 className="text-center">Login</h4>
         <div className="mb-3 mt-5">
           <label for="exampleInputEmail1" className="form-label lo">User Name</label>
           <input type="text"  onChange={(e) => setname(e.target.value)} className="form-control ji" id="exampleInputEmail1" aria-describedby="emailHelp"/>
         </div>
         <div className="mb-3">
           <label for="exampleInputPassword1" className="form-label lo">Password</label>
           <input type="password" onChange={(e) => setpassword(e.target.value)} className="form-control ji" id="exampleInputPassword1"/>
           <div id="emailHelp" className="form-text mt-3"> <Link style={{textDecoration:"none"}} to="/App">Sign Up</Link></div>
         </div>
       
         <button onClick={login_data}  className="p-3 mt-5 cl"><Link style={{textDecoration:"none"}}>Login</Link></button>
       </form>
       </div>
       </div>
       </div>
 </div>
  );
};

export default Login;
