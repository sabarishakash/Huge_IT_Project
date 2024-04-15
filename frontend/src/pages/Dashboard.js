import React,{useEffect, useState} from 'react'
import { json } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../components/Sidebar';
import img1 from "../components/Huge business.jpg"
// import img2 from "../components/arrangement Huge.JPG"
// import { MY_API_KEY } from "./config";
const Dashboard = ({handleLogOut1}) => {
// fetch('https://jobs-api14.p.rapidapi.com/list?query=Web%20Developer&location=United%20States&distance=1.0&language=en_GB&remoteOnly=false&datePosted=month&employmentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor&index=0',{
//     "method": "GET",
//     "headers": {
//         'X-RapidAPI-Key': MY_API_KEY,
// 		'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'

//     }
// }
// ).then(response=>response.json())
// .then(response=>{
//     console.log(response);
//     console.log(response.jobs);
  
// }).catch(err=>{
//     console.log(err);
// })


const[data,setData]=useState([])


useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos/50")
    .then((res)=>
        res.json()
    ).then((data)=>

       setData(data)
        // console.log(data)
    )
})

  
    const logOut=()=>{
      handleLogOut1()
  }
     return (
         <>
         {/* <h1>Huge IT Solutions</h1>
        <p key={data.id}>{data.title}</p>
<p>{data.userId}</p>
<p>{data.id}</p>
      <button onClick={logOut}>Log Out</button> */}
      {/* <div className='container-fluid bg-light'>
        <div className='row'>
            <div className='col-lg-2'>
                <Sidebar/>

            </div>
            <div className='col-lg-10 text-center'>
                <h1 className='mt-3 text-primary'>Huge IT Solutions</h1>
           
                <div className='row'>
                    <div className='col-lg-12'>
                    <h5 style={{fontSize:"30px"}}  key={data.id}><span className='text-danger'>Title:</span> {data.title}</h5>
                    
                   
                        <img className='mt-4' src={img1}/>
                        <div className='row'>
                            <div className='col-lg-1'>
                            </div>
                            <div className='col-lg-2 ps-5'>
                            <p className='ms-3 mt-2' style={{fontSize:"25px"}}><span className='text-danger ps-4'style={{fontSize:"25px"}} >Id:</span> {data.id}</p>

                            <p  style={{fontSize:"25px"}}><span className='text-danger'>UserId:</span>  {data.userId}</p>
                     
                            </div>

                        </div>

                    </div>
                    
                   

                </div>
               

            </div>


        </div>
       
      </div> */}
      {/* <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-3'>
                <Sidebar/>

            </div>
           

            <div className='col-lg-9 mt-2'>
                <h1 className='text-primary'>Huge IT Solutions</h1>

            </div>
            <div className='col-lg-2'>


            </div>
            <div className='col-lg-1'>
        <button className='btn btn-outline-danger p-2 mt-3' style={{fontSize:"20px"}} onClick={logOut}>Log Out</button> 

            </div>
            

        </div>


      </div> */}
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-3'>
                <Sidebar/>

            </div>
            <div className='col-lg-9'>
                <div className='row'>
                    <div className='col-lg-10 '>
                        <h1 className='text-center text-primary mt-2'>Huge IT Solutions</h1>

                    </div>
                    <div className='col-lg-2'>
                <button className='btn btn-outline-danger p-2 mt-2' style={{fontSize:"20px"}} onClick={logOut}>Log Out</button> 

                    </div>

                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                    <h5  style={{fontSize:"30px"}}  key={data.id}><span className='text-danger ms-2'>Title:</span> {data.title}</h5>
                    
                   

                    </div>

                </div>
                <div className='row'>
                   
                    <div className='col-lg-12'>
                        
                    <p className='ms-4 mt-2' style={{fontSize:"25px"}}><span className='text-danger ps-4'style={{fontSize:"25px"}} >Id:</span> {data.id}</p>


                   </div>
                </div>
                <div className='row'>
                <div className='col-lg-12'>
                <p  style={{fontSize:"25px"}}><span className='text-danger'>UserId:</span>  {data.userId}</p>
                     
                        
                       </div>
                       </div>
                       <div className='row'>
                        <div className='col-lg-1'>
                            
                       
                        </div>
                        <div className='col-lg-11'>
                        <img  src={img1}/>

                        </div>

                       </div>
            </div>

        </div>

      </div>
         </>
        )
      }
      
      export default Dashboard





