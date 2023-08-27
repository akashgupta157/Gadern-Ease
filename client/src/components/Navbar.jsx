import  "./Navbar.css"

import { Link } from "react-router-dom";

    const allname={
        margin:"24px",
        textAlign:"center",fontSize:"15px" ,
        fontWeight: 'bold' ,backgroundColor :"#F5F5F5" ,
        fontFamily:" Roboto, sans-serif ",
        color :"#404040",
    }

export const Navbar = () => {
{/* <div style={mystyle}> */}

 return <div className="mystyle">


    <div> <img src="logo.jpeg" alt="" style={{width:"250px"}}/></div>

    <Link to="/" style={{textDecoration: 'none'  , color:"black"}}>
      <h3   style={allname}>Home </h3>
    </Link>
    <Link to="/plants" style={{textDecoration: 'none'  , color:"black"}}>
      <h3   style={allname}>Gardening Practice</h3>
    </Link>
    <Link to="/plants" style={{textDecoration: 'none'  , color:"black"}}>
      <h3 style={allname}>Plants</h3>
    </Link>
    <Link to="/plants" style={{textDecoration: 'none'  , color:"black"}}>
      <h3   style={allname}>Perennials</h3>
    </Link>
    <Link to="/plants" style={{textDecoration: 'none'  , color:"black"}}>
      <h3   style={allname}>Trees & Shrubs</h3>
    </Link>
    
    <Link to="/plants" style={{textDecoration: 'none'  , color:"black"}}>
      <h3   style={allname}>Topics</h3>
    </Link>

<Link to="/register" style={{textDecoration: 'none'  , color:"black"}}>
      <h3   style={allname}>SignUp</h3>
    </Link>

    
 </div>

 
 

}

