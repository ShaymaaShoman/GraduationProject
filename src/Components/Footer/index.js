import React from "react";
import { Typography } from "antd";
import { PhoneOutlined,MailOutlined,InstagramOutlined,FacebookOutlined ,TwitterOutlined } from '@ant-design/icons';
import logo from '../../assets/logo.jpg'
import '../../../src/App.css';
import { useNavigate } from "react-router-dom";
function Foot() {
  const navigate = useNavigate();
    return (
        <div style={{display:"flex",justifyContent:"space-around"}} className="foot">
        <div>
          <img src={logo} alt="logo" width="60px"></img>
          <p>Is an application that runs on the organization<br/> of the purchasing process between the <br/>seller and the buyer </p>
        </div>
        <div>
          <ul style={{listStyle:"none"}}>
            <li style={{fontWeight:"700"}}>Products</li>
            <li>Trending</li>
            <li>My Account</li>
            <li>Brands</li>
          </ul>
        </div>
        <div>
          <ul style={{listStyle:"none"}}>
            <li style={{fontWeight:"700"}}>Legals</li>
            <li> <Typography.Link href="https://www.google.com" target={"_blank"} style ={{color:"black"}}>
          Privacy Policy
        </Typography.Link></li>
          

      
            <li>About Us</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div>
          <ul style={{listStyle:"none"}}>
            <li style={{fontWeight:"700"}}>Contacts</li>
            <li>Fell free get in touch with us via phone<br/> or send us a message</li>
            <li> <Typography.Link href="email:EmanSho@gmail.com" target={"_blank"} style ={{color:"black"}}>
          <MailOutlined style={{marginRight:"10px",fontSize:"15px"}} onClick={()=>navigate("/https://instagram.com/eman_said1?igshid=NDk5N2NlZjQ=")} /> <InstagramOutlined onClick={()=>navigate("/https://instagram.com/eman_said1?igshid=NDk5N2NlZjQ=")} style={{marginRight:"10px" ,fontSize:"17px"}}/> <FacebookOutlined style={{marginRight:"10px" ,fontSize:"17px"}} /> <TwitterOutlined style={{marginRight:"10px" ,fontSize:"17px"}} onClick={()=>navigate("/https://www.facebook.com/eman.saids.100483?mibextid=LQQJ4d")}/>
          </Typography.Link></li>
            <li><Typography.Link href="tel:+970 597353341" target={"_blank"} style ={{color:"black"}}>
          <PhoneOutlined  style={{marginRight:"10px"}}/> +970 597353341
          </Typography.Link></li>
          </ul>
        </div>
        </div>
      );
}
export default Foot;
//     <span>
           
// <span className="test">
// 
// </span><br/>
// <span className="test">
// 
// </span>
// </span>
// <div className="left">
// <span className="logo">Inner beauty</span>
// <span className="copyright">
//   © Copyright 2023. All Rights Reserved
// </span>
// </div>