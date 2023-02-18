import React from 'react';
import { Form, Input, Button,Typography,message } from 'antd';
import { Link,useNavigate } from 'react-router-dom';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";
import {useState}from "react"
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const SignUpForm = () => {
    const navigate = useNavigate();
  const [value, setValue] = useState();
   const [country, setCountry] = useState("");
   const [error, setError] = useState("");
   const [name, setName] = useState("");
   const [passwordConf, setPasswordConf] = useState("");
    const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

   const onFinish = (values) => {
    console.log('Success:', values);
    message.success("Your Success Sign Up");
     const USER_API_URL ="https://inner-beauty.onrender.com/api/auth/signup";
     navigate('/SignInForm')
    fetch(USER_API_URL, {
       method: "POST",
       headers: { 
        "Content-Type": "application/json",
       Authorization: `Bearer ${localStorage.getItem('accessToken')}`,   
     },
       body: JSON.stringify({
        name: values.name,
         email: values.email,
         password: values.password,
         mobile: values.mobile,
         country: values.country,
       }),
     })
     .then(response => response.json())
     .then((acualData)=>{
       localStorage.setItem('accessToken',acualData.data.accessToken);
       localStorage.setItem('refreshToken',acualData.data.refreshToken);
     }).catch((error) => {
         console.log(error);
           if (!error?.response) {
             setError('No Server Response');
         } else if (error.response?.status === 400) {
           setError('Missing Username or Password');
         } else if (error.response?.status === 401 && error.response?.status === 500) {
           setError('Unauthorized');
         } else {
           setError('Login Failed');
   }})
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
   
  };

  return (
    <div className='formSign-wrapper' style={{paddingLeft:"50px"}}>
    <Typography.Title level={2}  style={{fontFamily:"'Open Sans', sans-serif",textAlign:"center",color:"#e93467", marginTop:"2px" }}>Sign Up</Typography.Title>
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="signup-form-container"
    >
    <Form.Item
        label="Username"
        name="name"
        style={{marginLeft:"-10%" }}
        value={name}
        onChange={(e)=>setName(e.target.value)}
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input style={{ width:"30vw",height: 50 ,marginLeft:"10%"}}/>
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        style={{marginLeft:"-16%" }}
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input type='email' style={{ width:"30vw",height: 50 ,marginLeft:"14%"}}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        rules={[{ required: true, message: 'Please input your password!' }]}
        style={{marginLeft:"-11%" }}
      >
        <Input.Password style={{ width:"30vw",height: 50 ,marginLeft:"10%"}} />
      </Form.Item>

      <Form.Item
        label="ConfirPassword"
        name="passwordConf"
          onChange={(e)=>setPasswordConf(e.target.value)}
          value={passwordConf}
        dependencies={['password']}
        hasFeedback
        rules={[
            {
                required: true,
                message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
                validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }
                    return Promise.reject('The two passwords that you entered do not match!');
                },
            }),
        ]}
      >
        <Input.Password style={{ width:"30vw",height: 50 }} />
      </Form.Item>
      
      <Form.Item
      label="Phone"
      name="mobile"
      rules={[{ required: true, message: 'Please input your password!' }]}
      style={{marginLeft:"-15%" }}
    >
    <PhoneInput
    style={{ width:"30vw",height: 50 ,marginLeft:"13%"}}
    name="mobile"
     defaultCountry="PS"
    value={value}
    onChange={setValue}/>  
    </Form.Item>

    <Form.Item
    label="country"
    name="country"
    rules={[{ required: true, message: 'Please input your password!' }]}
    style={{marginLeft:"-13%" }}
  >
  <select
  value={country}
  name="country"
  style={{ width:"30vw",height: 50 ,marginLeft:"11%"}}
  onChange={(event) =>
    setCountry(event.target.value || undefined)
  }
  placeholder=""
>
  <option value="">{en[""]}</option>
  {getCountries().map((country) => (
    <option key={country} value={en[country]}>
      {en[country]} +{getCountryCallingCode(country)}
    </option>
  ))}
</select>
  </Form.Item>
 
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" className="signup-form-button" style={{ width:"30vw",height: 50,background:"#e93467" }}>
          Sign up
        </Button>
      </Form.Item>
      <Link to="/SignInForm" style={{paddingLeft:"52%",color:"#e93467" , marginTop:"-12px"}}>I already have an account Sign In </Link>
    </Form>
    </div>
  );
}
// import React,{useState} from 'react'
// import {Row,Form, Input,message, Button, Typography } from 'antd';
// 
// import {
//   getCountries,
//   getCountryCallingCode,
// } from "react-phone-number-input/input";
// import en from "react-phone-number-input/locale/en.json";
// const SignUpForm = () => {
//   const [mobile, setMobile] = useState("");
//   const [country, setCountry] = useState("");

//     const onFinish = (values) => {
//       console.log('Success:', values);
//       message.success("Your Success Sign Up ");
//     };
  
//     const onFinishFailed = (errorInfo) => {
//       console.log('Failed:', errorInfo);
//     };
//   return (
//     <>
//     <Typography.Title level={2}  style={{ padding:"5%", margin: '0 auto' }}>Sign Up</Typography.Title>
//     <Row  justify="center"  style={{padding:"1%",height:"680px",width:"100vw"}}>
    
//   <Form
//     name="basic"
//     initialValues={{ remember: true }}
//     onFinish={onFinish}
//     onFinishFailed={onFinishFailed}
//     className="Form"
//   >
//   <Form.Item
//   label="Username"
//   name="username"
//   rules={[{ required: true, message: 'Please input your username!' }]}

// >
// <Input  style={{marginLeft:"2px", width:"40vw",height: 50 }}/>
// </Form.Item>
// <<<<<<< HEAD

//   <Form.Item
//   label="Email"
//   name="email"
//   rules={[{ required: true, message: 'Please input your email!' }]}

// >
//   <Input  style={{marginLeft:"28px", width:"40vw",height: 50 }}/>
// </Form.Item>

//   <Form.Item
//   label="Password"
//   name="password"
//   rules={[{ required: true, message: 'Please input your password!' }]}
  
// >
//   <Input.Password  style={{ width:"40vw",height: 50 }}/>
// </Form.Item>


// =======

//   <Form.Item
//   label="Email"
//   name="email"
//   rules={[{ required: true, message: 'Please input your email!' }]}

// >
//   <Input  style={{marginLeft:"28px", width:"40vw",height: 50 }}/>
// </Form.Item>

//   <Form.Item
//   label="Password"
//   name="password"
//   rules={[{ required: true, message: 'Please input your password!' }]}
  
// >
//   <Input.Password  style={{ width:"40vw",height: 50 }}/>
// </Form.Item>

//   <Form.Item label="Mobile Phone"
//   rules={[{ required: true, message: 'Please input your Phone!' }]}

//   >
//   <PhoneInput
//   name="mobile"
//   defaultCountry="PS"
//   inputStyle={{
//     width: "390px",
//   }}
//   value={mobile}
//   onChange={setMobile}

// />
// </Form.Item>
// >>>>>>> 34722a7d83037bcf8a121da309773c653309bc7a

//   <Form.Item label="country"
//   rules={[{ required: true, message: 'Please input your country!' }]}

//   >
//       <select
//                 value={country}
//                 name="country"
//               label="country"
//                 onChange={(event) =>
//                   setCountry(event.target.value || undefined)
//                 }
//                 placeholder=""
                
//               >
//                 <option value="">{en[""]}</option>
//                 {getCountries().map((country) => (
//                   <option key={country} value={en[country]}>
//                     {en[country]} +{getCountryCallingCode(country)}
//                   </option>
//                 ))}
//               </select>
//               </Form.Item>

//   <Form.Item>
//   <Button type="primary" style={{marginLeft:"13%",width:"40vw",height: 50,background:"#e93467"}} htmlType="submit">
//   Sign Up  
//   </Button>
// </Form.Item>
// <Link to="/SignInForm" style={{marginLeft:"40%",color:"#e93467"}}>I already have an account Sign In </Link>

//   </Form>
//   </Row>
//   </>
//   )
// }

 export default SignUpForm
// //   <Form.Item label="Mobile Phone"
// //   rules={[{ required: true, message: 'Please input your Phone!' }]}

// //   >
// //   <PhoneInput
// //   name="mobile"
// //   defaultCountry="PS"
// //   inputStyle={{
// //     width: "390px",
// //   }}
// //   value={mobile}
// //   onChange={setMobile}

// // />
// // </Form.Item>