import React from "react";
import {
  Badge,
  Button,
  Select,
  Drawer,
  Form,
  Input,
  InputNumber,
  Menu,
  message,
  Table,
  Typography,
  Tag,
  Modal,
  Image,
} from "antd";
import { HomeFilled, ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState, useContext,useEffect } from "react";
 import { getCart,addDelete,CancelItem ,CreateOrder,OrderDetails,Uppdata,CancelOrder} from "../../API/index.js";
import logo from "../../assets/logo.jpg";
import { ShopContext } from "../../context/shop-context";
function Header() {
  const navigate = useNavigate();
// const data =localStorage.getItem("data");
const [data,setData] = useState({});

useEffect(()=>{
  var a = localStorage.getItem("data");
  setData(a)
 console.log(`${a}test`);
},[localStorage])
  const onMenuClick = (item) => {
    navigate(`/${item.key}`);
  };
  return (
    <div className="header">
      <Typography.Title style={{ display: "flex", gap: "10px" }}>
        <Image
          onClick={() => navigate("./")}
          src={logo}
          width="70px"
          height="60px"
        />
      </Typography.Title>
      <Menu
        className="appMenu"
        onClick={onMenuClick}
        mode="horizontal"
        items={[
          {
            label: <HomeFilled style={{ fontSize: "20px" }} />,
            key: "",
          },
          {
            label: "About",
            key: "about",
          },
          {
            label: "products",
            key: "proudect",
          },
          {
            label: "Help",
            key: "HelpLayout",
          },
          {
            label: <AddCart />,
            key: "proudect",
          },
        ]}
      />
      {data?._id?

          <Button   style={{
            background: "#fff",
            border: "1px solid #e93467",
          }} onClick={()=>navigate("./SignInForm")} >
          Logout
         </Button>
          :
       
       <>
        <Button
          style={{
            background: "#e93467",
            marginRight: "-320px",
            border: "1px solid #e93467",
            padding: "3px 21px",
            marginTop: "5px",
            color:"#000",
            
          }}
          onClick={() => navigate("./SignInForm")}
        >
          Login
        </Button>
        <Button
          style={{
            background: "#fff",
            border: "1px solid #e93467",
          }}
          onClick={() => navigate("./SignUpForm")}
        >
          SignUp
        </Button>
      </>
       }
    </div>
  );
}


function AddCart() {
  const navigate = useNavigate();
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState(false);
  const { newProduct, setNewProduct } = useContext(ShopContext);
  const [data, setData] = useState(null);
  const [orderDetails,setOrderDetails]=useState({});
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
   const [isModalOpen, setIsModalOpen] = useState(false);
const[orderDrawerOpen,setOrderDrawerOpen]=useState(false);
const showModal = () => {
  setIsModalOpen(true);
};

const handleOk = () => {
  setIsModalOpen(false);
};

const handleCancel = () => {
  setIsModalOpen(false);
};

useEffect(()=>{
  getCart().then(res=>{
    console.log(res?.data?.products)
    setNewProduct(res?.data?.products);
  })
},[])
  const handleDeleteFromCart = (id) => {
    const newCart = [...newProduct];
    newCart.splice(id, 1);
    setNewProduct(newCart);
  
    addDelete().then(res=>{
      message.success(` removed from the cart.`);
      getCart();
    })

  };
const handelOrderDetails =(id)=>{
  OrderDetails(id).then(res=>{
    console.log(res?.data)
    setOrderDetails(res?.data);
    showModal();
  })
}
    
 
  
  const handleUppdata = (id) => {
  
    Uppdata().then(res=>{
      message.success(` Uppdata from the cart.`);
    })

  };
  useEffect(() => {
    fetch(`https://inner-beauty.onrender.com/api/order/list`,{
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
       Authorization: `Bearer ${localStorage.getItem('accessToken')}`,   
     }})
     .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
      .then((actualData) => {
        var a = actualData?.data?.filter((item,index)=>{
          
          return item?.totalPrice != 0 ;
        })
        console.log(a,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        setData(a);
        console.log(actualData.data,"TTTTSh");
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

      
     //cart table 5 product

    // getOrderList().then(res=>{
    //    return
    //   message.success(`Order For You .`);
    // })
    const HandleCancelOrderFinal=()=>{
      CancelOrder().then(res=>{
        message.success(`Cancel Your Order.`);
      })
       
    }
 
  const handleCancelButton = () => {
    CancelItem().then(res=>{
      message.success(`Cancel Your Cart.`);
    })
     
    

  };
  
  const onConfirmOrder = (values) => {
    console.log({ values });
    setCartDrawerOpen(false);
    setCheckoutDrawerOpen(false);
   
  };
  const onOrderView = (values) => {
    console.log({ values });
     setOrderDrawerOpen(true);
     CreateOrder().then(res=>{
      message.success("Your order has been placed successfully.");
    })
  
  };
  return (
    <div>
      <Badge
        onClick={() => {
          getCart().then(res=>{
            console.log(res?.data?.products)
            setNewProduct(res?.data?.products);
          })
          setCartDrawerOpen(true);
        }}
        count={newProduct.length} //problem
        className="soppingCartIcon"
      >
        <ShoppingCartOutlined
          style={{ fontSize: "25px", paddingTop: "10px" }}
        />
      </Badge>
      <Drawer
        open={cartDrawerOpen}
        onClose={() => {
          setCartDrawerOpen(false);
        }}
        title="Your Cart"
        contentWrapperStyle={{ width: 500 }}
        maskClosable={false}
      >
        <Table
          pagination={false}
          columns={[
            {
              title: "Title",
              dataIndex: "product",
              render: (value) => {
                return <span>{value?.name}</span>;
              },
            },
            {
              title: "Price",
              dataIndex: "price",
              render: (value) => {
                return <span>${value}</span>;
              },
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
              render: (value, record) => {
                return (
                  <InputNumber
                  onClick={handleUppdata}
                    min={0}
                    value={value}
                    onChange={(value) => {
                      setNewProduct((pre) =>
                        pre.map((cart) => {
                          if (record.id === cart.id) {
                            cart.total = cart.price * value;
                            cart.quantity=value
                          }
                          return cart;
                        })
                      );
                    }}
                  ></InputNumber>
                );
              },
            },
            {
              title: "Total",
              dataIndex: "total",
              render: (value,record ) => {
                return <span>${record.price * record.quantity} </span>;
              },
            },
            {
              title: "Remove",
              dataIndex: "Remove",
              render: (value,record) => {
                return (
                  <span
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => handleDeleteFromCart(record.product.id)}
                  >
                    Delete
                  </span>
                );
              },
            },
          ]}
          dataSource={newProduct}
          summary={(newProduct) => {
            console.log(newProduct,"testtttttt")
            const total = newProduct.reduce((pre, current) => {
              return pre + (current.price * current.quantity);
            }, 0);
            return <span>Total: ${total}</span>;
          }}
        />
        <Button
          onClick={() => {
            setCheckoutDrawerOpen(true);
          }}
          type="primary"
          style={{ background: "#e93467" }}
        >
          Checkout Your Cart
        </Button>
      
      </Drawer>
      <Drawer
        open={checkoutDrawerOpen}
        onClose={() => {
          setCheckoutDrawerOpen(false);
        }}
        title="Confirm Order"
      >
        <Form onFinish={onConfirmOrder}>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please enter your full name",
              },
            ]}
            label="Full Name"
            name="full_name"
          >
            <Input placeholder="Enter your full name.." />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email",
              },
            ]}
            label="Email"
            name="your_name"
          >
            <Input
              placeholder="Enter your email.."
              style={{ marginLeft: "28px", width: "255px" }}
            />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please enter your address",
              },
            ]}
            label="Address"
            name="your_address"
          >
            <Input
              placeholder="Enter your full address.."
              style={{ marginLeft: "13px", width: "255px" }}
            />
          </Form.Item>

          <Form.Item
            label="Payment Method"
            name="paymentMethod"
            rules={[
              { required: true, message: "Please select a payment method!" },
            ]}
          >
            <Select style={{ marginLeft: "1px", width: "210px" }}>
              <Select.Option value="CashOnDelivery">
                {" "}
                Cash on Delivery
              </Select.Option>
            </Select>
          </Form.Item>
<div style={{display:"flex"}}>
          <Button
            type="primary"
            htmlType="submit"
            onClick={onOrderView}
            style={{ background: "#e93467",width:"150px",height:"40px" }}
          >
            {" "}
            Confirm Order
          </Button>
          <Button
          type="primary"
          htmlType="submit"
          style={{ background: "#e93467",marginLeft:"10px",width:"150px",height:"40px" }}
            onClick={handleCancelButton}
        >
          {" "}
          Cancel Your Order
        </Button>
        </div>
        </Form>
      </Drawer>
      <Drawer
      open={orderDrawerOpen}
      onClose={() => {
        setOrderDrawerOpen(false);
      }}
      title="Order Summary"
       contentWrapperStyle={{ width: 1370 }}
    >
    <Table
    pagination={false}
    columns={[
      {
        title: 'OrderNumber',
        dataIndex:'orderNumber',
        key:'orderNumber',
        render: (value) => {
          return <span style={{ marginLeft:"50px" }}>{value}</span>
        },
      },
      
      {
        title: 'Data',
        dataIndex:'createdAt',
        key:'createdAt',
      },
      {
        title: 'Status',
        dataIndex:'status',
        key: 'status',
        render: (status) => {
          let color;
          if (status === 'canceled') {
            color = 'red';
          } else if (status === 'shipped') {
            color = 'green';
          }else if (status === 'pending') {
            color = 'blue';
          }
          return (
            <Tag color={color} key={status}>
              {status.toUpperCase()}
            </Tag>
          );
        },
      },
      {
        title: 'TotalPrice',
        dataIndex:'totalPrice',
        key: 'totalPrice',
       
      },
      {
        title: 'View',
        render: (value,record) => {
          return(
            <>
            <Button type="primary" htmlType="submit" onClick={()=>{handelOrderDetails(record?._id); showModal();}} style={{ background: "#e93467",width:"100px",height:"30px" }}>{" "}View Order </Button>
                      
        </>
          )
        },
      },
    ]}
   
    dataSource={data}
 />
 <Button
 type="primary"
 htmlType="submit"
 onClick={()=>HandleCancelOrderFinal}
 style={{ background: "#e93467",marginTop:"30px" }}
>
 {" "}
Cancel Order
</Button>
    </Drawer>
    {orderDetails?.products?.length > 0 ? 
            
      <Modal title="Order Details" open={isModalOpen}  onCancel={handleCancel}>
      <p>{orderDetails?.products[0]?.product?.name}</p>
    <Image className="itemCardImage" src={orderDetails?.products[0]?.product?.image} />
      <p>{orderDetails.quantity}</p>
      <p>{orderDetails.price}</p> 
    </Modal>
    :
    ""
  } 
    </div>
  );
}
export default Header;
//  <span style={{marginLeft:"1240px",position:"absolute",fontSize:"25px",
// '&:active': {
//   borderBottomColor:' 1px solid red',
// },}} onClick={()=>navigate("/SignInForm")}>
// <span/>
 //  dataSource={getOrderList()}
//  dataSource={data}