import React from 'react'
import './About.css'
import { Image } from 'antd';
import test from "../assets/test.jpeg"

const About = () => {
  return (
    <>
   <div  className='about-container text-3xl font-bold underline'>
<div className='colui'>
<Image  src={test} alt ="img " style={{width:"500px" ,height:"450px",marginTop:"80px",marginLeft: "100px"}} />
</div>
<div className='colui'>
<h2>Our Story</h2>
<div className='underLine'></div>
  <p>Is an application that runs on the organization of the purchasing process between the seller
   and the buyer through the purchase and display purchases and submit purchase orders from the 
   buyer to the seller and notify the seller these requests and display the procurement log
    periodically for both the seller and the buyer process,and display the good and the price and
     quantity in the inner beauty store.</p> 
</div>
   </div>
   <div>
    <form method='post' action='/photo'>

    </form>
   </div>
    </>
  )
}

export default About
