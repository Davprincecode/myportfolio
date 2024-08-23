import  { useState } from 'react'
// import logo from './assets/image/logo.png';

function Navigation() {
 const [toggle, setToggle] = useState(false)
    return (
      <div>
  <div className={toggle ? "navcontainerShow" : "navcontainer"}>
  <a href="index.html">
  <div className="logocontainer">
     <h4>dav<span>prince</span> </h4>
     {/* <img src={logo} /> */}
  </div>
  </a>
  
  <div id="itemscontainer" className={toggle ? "itemscontainershow" : "itemscontainer"}>
      <ul>
          <li><a href="index.php">Home</a> </li>
          <li><a href="#aboutmee">about</a></li>
          <li><a href="#resume">resume</a></li>
          <li><a href="#project">projects</a></li>
          <li><a href="#contact">contact</a> </li>
          {/* <!-- <li><a href="">about</a></li> --> */}
      </ul>
  </div>
  <div className="bar" onClick={() => setToggle(!toggle)}>
  <div className="divbar">
      <div className="div" style={{width: "15px"}}></div>
      <div className="div" style={{width: "10px", marginTop: "2px"}}></div>
      <div className="div" style={{width: "15px", marginTop: "2px"}}></div>
  </div>
  
      <div className="cancel">
      <div className="canceldiv" style={{width: "20px"}}></div>
      <div className="canceldiv2" style={{width: "21px",
      marginBottom: "1px"}}></div>
      </div>
  
  </div>
  
  </div>
  
      </div>
)}

export default Navigation