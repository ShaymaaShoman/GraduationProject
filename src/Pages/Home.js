import React,{useState,useContext, useEffect} from 'react'
import {  Carousel,Image,message, Card,Button, Col, Row} from 'antd';
import {useNavigate } from "react-router-dom";
import love from '../assets/love.jpeg'
import elev from '../assets/elev.jpeg'
import first from '../assets/first.jpeg'
import four from '../assets/four.jpeg'
import image1 from '../assets/test.jpeg'
import image2 from '../assets/five.jpeg'
import image3 from '../assets/siven.jpeg'
import test from '../assets/test.jpeg'
import image5 from '../assets/Group.png'
import image6 from '../assets/second.jpeg'
import image4 from '../assets/third.jpeg'
import image7 from '../assets/ten.jpeg'
import image8 from '../assets/six.jpeg'
import image9 from '../assets/g3.png'
import kids from "../Video/Kids.mp4";
import Foot from '../Components/Footer';
import { ShopContext } from "../context/shop-context";
const { Meta } = Card;
const Home = () => {
  const data =localStorage.getItem("data");
  const navigate = useNavigate();

    const style = {
      // background: '#F5F5F6',
      padding: '20px 20px 20px 30px',
    };

  return (
    <div>
      <div className="carousel">
      <Carousel autoplay>
      <div> <img src={love} style={{height:"700px",width:"99vw"}}></img></div>
      <div><img src={four} style={{height:"700px",width:"99vw"}}></img></div>
        <div><a href="/"> <video width="100%" height="700px" autoPlay >
      <source src={kids} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video></a></div>
       
     
      </Carousel>
      </div>
  


      
  
  <div className="site-card-wrapper">
  <div style={{textAlign:"center",paddingTop:"50px" }}>
    <p style={{fontSize:"14px" }}>Explore Awesome Products</p>
    <p style={{fontSize:"25px",fontWeight:"700",marginTop:"-5px" ,textTransform:"capitalize"}}>RECOMMENDED FOR YOU</p>
  </div>
  <div style={{paddingLeft:"15%" , paddingTop:"20px"}}>
    <Row gutter={16}>
      <Col span={7}>
      <Card
    hoverable
    style={{
      width: 320,
      height: 400,
    }}
    cover={<Image src={image1} height= "307px"></Image>}
  >
  <div style={{display:"flex"}}>
  <Meta title="Hair Oil" description="200$"  style={{marginRight:"120px"  }}/>
  <AddToCartButton item={data} style={{border:"1px solid blue" }}/>
  </div>
   
  </Card>
      </Col>
      <Col span={7}>
      <Card
    hoverable
    style={{
      width: 320,
      height: 400
    }}
    cover={<Image src={image2} height= "307px"></Image>}
  >
  <div style={{display:"flex"}}>
  <Meta title="Moist Lips" description="50$" style={{marginRight:"100px"  }} />
  <AddToCartButton item={data} style={{border:"1px solid blue" }}/>
  </div>
   
  </Card>
      </Col>
      <Col span={7}>
        <Card
    hoverable
    style={{
      width: 320,
      height: 400
    }}
    cover={<Image src={image3} height= "307px"></Image>}
  >
  <div style={{display:"flex"}}>
  <Meta title="Hair Styling Jel"  description="150$" style={{marginRight:"70px"  }}   />
  <AddToCartButton item={data} style={{border:"1px solid blue" }}/>
  </div>
   
  </Card>
      </Col>
    </Row>
    <button onClick={()=>navigate("./Proudect")}  style={{padding:" 10px 20px" , fontSize:"20px" , marginLeft:"420px" , marginTop:"70px"}}>explor other product</button>
    </div>
  </div>
  

  <div style={{ position: "relative" }}> 
   <img src={image5} alt="ff" width="100%" style={{marginTop:"10%"}}/>
   <p style={{ position:"absolute" ,top: "170px" , left: "50px" , fontSize: '40px' , color :" white"}}>Our Medical Products Never Run <br/> Out Get 50% Off Sitewide</p>
  </div>

 <div style={{background:"#ececec" ,marginTop:"10%" ,height:"20%"}}>
  <div style={{textAlign:"center",paddingTop:"50px" }}>
    <p style={{fontSize:"14px" }}>Straight From Inner</p>
    <p style={{fontSize:"25px",fontWeight:"700",marginTop:"-5px" ,textTransform:"capitalize"}}>New Collection</p>
  </div>
  <Row style={{marginTop:"3%"}}>
  <Col className="gutter-row" span={1}></Col>
      <Col className="gutter-row" span={6}>
        <div style={style}><Image src={image7} alt="ff" width="100%" height="280px" style={{borderRadius:"32px"}}/>
        <div style={{  display: "flex",justifyContent: "space-between",padding:"0 20px"}}>
         <div><Meta title="Moist Lips" style={{fontSize:"18px",fontWeight:600 , paddingTop: "10px"}}/></div>
         <div><p>200$</p></div>
        </div>
        </div>
        
        <div style={style}><Image src={image8} alt="ff" width="100%" height="280px" style={{borderRadius:"32px"}}/>
        <div style={{  display: "flex",justifyContent: "space-between",padding:"0 20px"}}>
         <div><Meta title="Bath Fizz" style={{fontSize:"18px",fontWeight:600 , paddingTop: "10px"}}/></div>
         <div><p>200$</p></div>
        </div>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}><Image src={elev} alt="ff" width="100%" height="280px" style={{borderRadius:"32px"}} />
        <div style={{  display: "flex",justifyContent: "space-between",padding:"0 20px"}}>
         <div><Meta title="Lip Balm" style={{fontSize:"18px",fontWeight:600 , paddingTop: "10px"}}/></div>
         <div><p>200$</p></div>
        </div>
        </div>
        
        <div style={style}><Image src={image4} alt="ff" width="100%" height="280px" style={{borderRadius:"32px"}}/>
        <div style={{  display: "flex",justifyContent: "space-between",padding:"0 20px"}}>
         <div><Meta title="Hair Styling Gel" style={{fontSize:"18px",fontWeight:600 , paddingTop: "10px"}}/></div>
         <div><p>200$</p></div>
        </div>
        </div>
      </Col>
      {/* <Col className="gutter-row" span={1}></Col> */}
      <Col className="gutter-row" span={10}>
        <div style={style}>
          <Image src={image6} alt="ff" width="100%" style={{border:"1px",borderRadius:"132px",height:"610px"}}/>
          <div style={{  display: "flex",justifyContent: "space-between" ,padding:"0 30px"}}>
         <div><Meta title="Bath & Shower Gel" style={{fontSize:"18px",fontWeight:600 , paddingTop: "10px"}}/></div>
         <div><p>200$</p></div>
        </div>
        </div>
      </Col>
      <button onClick={()=>navigate("./Proudect")}  style={{padding:" 10px 20px" , fontSize:"20px" , marginLeft:"680px", marginTop:"60px"}}>explor other product</button>
    </Row>
    </div>


  <div style={{ position: "relative" }}><img src={image9} alt="ff" width="100%" style={{marginTop:"10%"}}/>
  <p style={{ position:"absolute" ,top: "170px" , left: "50px" , fontSize: '40px' , color :" white"}}>Our Medical Products Never Run <br/> Out Get 50% Off Sitewide</p>
  </div>

   <div style={{background:"#ececec" ,marginTop:"10%" ,height:"18%"}}>
  <div style={{textAlign:"center",paddingTop:"50px" }}>
    <p style={{fontSize:"14px" }}>TOP PRODUCTS</p>
    <p style={{fontSize:"25px",fontWeight:"700",marginTop:"-5px" ,textTransform:"capitalize"}}>Trending This Week</p>
  </div>
     <Row style={{marginTop:"5%"}}>
      <Col className="gutter-row" span={6}>
        <div style={style}><Image src={first} alt="ff" width="100%" height="280px" style={{borderRadius:"32px"}}/>
        <div style={{  display: "flex",justifyContent: "space-between"}}>
         <div><Meta title="Hair Shampoo" style={{fontSize:"18px",fontWeight:600 , paddingTop: "10px"}}/></div>
         <div><p>200$</p></div>
        </div>
        </div>
        
        <div style={style}><Image src={test} alt="ff" width="100%" height="280px" style={{borderRadius:"32px"}}/>
        <div style={{  display: "flex",justifyContent: "space-between"}}>
         <div><Meta title="hair shampoo" style={{fontSize:"18px",fontWeight:600 , paddingTop: "10px"}}/></div>
         <div><p>200$</p></div>
        </div>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}><Image src={elev} alt="ff" width="100%" height="280px" style={{borderRadius:"32px"}} />
        <div style={{  display: "flex",justifyContent: "space-between"}}>
         <div><Meta title="hair shampoo" style={{fontSize:"18px",fontWeight:600 , paddingTop: "10px"}}/></div>
         <div><p>200$</p></div>
        </div>
        </div>
        
        <div style={style}><Image src={image4} alt="ff" width="100%" height="280px" style={{borderRadius:"32px"}}/>
        <div style={{  display: "flex",justifyContent: "space-between"}}>
         <div><Meta title="hair shampoo" style={{fontSize:"18px",fontWeight:600 , paddingTop: "10px"}}/></div>
         <div><p>200$</p></div>
        </div>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}><Image src={image7} alt="ff" width="100%" height="280px" style={{borderRadius:"32px"}}/>
        <div style={{  display: "flex",justifyContent: "space-between"}}>
         <div><Meta title="hair shampoo" style={{fontSize:"18px",fontWeight:600 , paddingTop: "10px"}}/></div>
         <div><p>200$</p></div>
        </div>
        </div>
        
        <div style={style}><Image src={image8} alt="ff" width="100%" height="280px" style={{borderRadius:"32px"}}/>
        <div style={{  display: "flex",justifyContent: "space-between"}}>
         <div><Meta title="hair shampoo" style={{fontSize:"18px",fontWeight:600 , paddingTop: "10px"}}/></div>
         <div><p>200$</p></div>
        </div>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}><Image src={elev} alt="ff" width="100%" height="280px" style={{borderRadius:"32px"}} />
        <div style={{  display: "flex",justifyContent: "space-between"}}>
         <div><Meta title="hair shampoo" style={{fontSize:"18px",fontWeight:600 , paddingTop: "10px"}}/></div>
         <div><p>200$</p></div>
        </div>
        </div>
        
        <div style={style}><Image src={image4} alt="ff" width="100%" height="280px" style={{borderRadius:"32px"}}/>
        <div style={{  display: "flex",justifyContent: "space-between"}}>
         <div><Meta title="hair shampoo" style={{fontSize:"18px",fontWeight:600 , paddingTop: "10px"}}/></div>
         <div><p>200$</p></div>
        </div>
        </div>
      </Col>
    </Row>
    </div>
  <div style={{marginTop:"10%",marginBottom:"10%", position: "relative" }}>
  <p style={{ position:"absolute" ,top: "25px" , left: "50px" , fontSize: '40px' , color :" white"}}>Our Medical Products Never Run <br/> Out Get 50% Off Sitewide</p>
   <img src={image5} alt="ff" width="100%" />
  </div>
     <Foot/>
    </div>
  )
}
function AddToCartButton({ item }) {
  const { newProduct, setNewProduct} = useContext(ShopContext);
  const [loading, setLoading] = useState(false);
  const addProductToCart = () => {
    // setLoading(true);
    if (newProduct.indexOf(item) !== -1) return;
    setNewProduct([...newProduct, item]);
    message.success(`${item.title} has been added to cart!`);
    // addToCart(item.id).then((res) => {
    //   
    //   setLoading(false);
    // });
  };
  return (
    <Button
      type="link"
      onClick={() => {
        addProductToCart();
      }}
      loading={loading}
    >
      Add to Cart
    
    </Button>
  );
}
export default Home;
