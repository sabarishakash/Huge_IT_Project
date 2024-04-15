import logo from "./logo.svg";
// import "./App.css";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

import { del_url, get_url, login_url, post_url, put_url } from "./URL/url";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [data, setdata] = useState([]);
  const [ref, setref] = useState(true);
  const [login_data, setlogin_data] = useState([]);
  console.log(data);
  const post_data = async () => {
    await axios.post(post_url, {
      name,
      email,
      password,
    });
  };
  const del = (v) => {
    axios.delete(`${del_url}/${v._id}`).then(() => {
      // console.log(v._id) ;
      setref(!ref);
    });
  };
  const edit = (v) => {
    setname(v.name);
    setemail(v.email);
    setpassword(v.password);
  };
  const update = async (v) => {
    await axios
      .put(`${put_url}/${v._id}`, {
        name,
        email,
        password,
      })
      .then((res) => {
        setname("");
        setemail("");
        setpassword("");
      })
      .catch((err) => {
        console.log("error");
      });
  };
  function login() {
    axios
      .post(login_url, {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data.message);

        if (res.data.message === "login success") {
          navigate("/Dashboard");
        } else {
          navigate("/");
          setTimeout(() => {
            setlogin_data(res.data.message);
          });
        }
        setTimeout(() => {
          setlogin_data(res.data.message);
        }, 2000);
        setTimeout(() => {
          setlogin_data("");
        }, 3000);
      });

    // setpassword("");
    // setemail("");
  }

  useEffect(() => {
    axios.get(get_url).then((res) => {
      // console.log(res);
      setdata(res.data);
    });
  }, [ref]);

  return (
    <>
    
    
   
        <div className="container mt-5">
  <div className="row justify-content-center mt-5"> 
    <div className="col-lg-4">
      <h1 className="text-center">Register</h1>
      <div className="rounded shadow p-4 mt-4" style={{backgroundColor:"violet"}}>
        <form>
          <div class="mb-3 mt-3">
            <label for="name" class="form-label">Name:</label>
            <input type="text" onChange={(e) => setname(e.target.value)} value={name} class="form-control" id="email" placeholder="Enter name" name="name"/>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} class="form-control" id="pwd" placeholder="Enter email" name="email"/>
          </div>
          <div class="mb-3">
            <label for="pwd" class="form-label">Password:</label>
            <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} class="form-control" id="pwd" placeholder="Enter password" name="password"/>
          </div>
          <button className="btn btn-primary" onClick={post_data}>Sign up</button>
          <button className="ms-3 btn btn-success" onClick={() => login()}><Link style={{textDecoration:"none"}} className="text-white">Login</Link></button>
        </form>
      </div>
    </div>
  </div>
</div>


    </>
    
  );
}

export default App;
