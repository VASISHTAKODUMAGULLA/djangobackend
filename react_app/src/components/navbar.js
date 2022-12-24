import React from 'react'
import store from './store.jpg'
import "./styles.css";
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
// import { MainNav, NavLink, Nav, ResIcon } from '/NavElement'
// import {
//     Nav,
//     NavLink,
//     Bars,
//     NavMenu,
//     NavBtn,
//     NavBtnLink,
//   } from './NavbarElements';
function loginRoute(){

}
function signupRoute(){

}
function homeRoute(){

}

const Navbar = () => {
  return (

    //   {/* <MainNav> */}
    //     {/* <ResIcon /> */}
       
    //   {/* </MainNav> */}
      
          <nav style={{ backgroundColor:"#333"}}>
              <div style={{display: "flex", alignItems:"center",color:"white", justifyContent:"space-between", gap:"2rem", padding:"1rem" }}>                 
                   
                      <img onClick = {homeRoute} src={store} alt="logo" style={{height: "50px", textAlign:"left"}}></img>
                    <div>               
                      <a href='/login' style={{color:"white" ,margin:"20px"}}>
                          Login
                      </a>                    
                      {/* <Button variant="primary">Primary</Button>{' '} */}
                      <a href='/signup' style={{color:"white"}}>
                          Signup
                      </a> 
                    </div>                
              </div>
          </nav>
  )
}

export default Navbar




// const Navbar = () => {
//     return (
//       <nav className="navbar">
//         <div className="links">
//           <a href="/">Home</a>
//           <a href="/create">New Blog</a>
//           <a href="/create" style={{ 
//             color: 'white', 
//             backgroundColor: '#f1356d',
//             borderRadius: '8px' 
//           }}>New Blog</a>
//         </div>
//       </nav>
//     );
//   }
   
//   export default Navbar;