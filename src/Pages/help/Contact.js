

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { message } from 'antd';
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_4yf30dr',form.current,'7OZQAEujIJZdz9J_l')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const onFinish = (values) => {
    console.log('Success:', values);
    message.success("Your Success Contact ");

  };
  return (
    <div className='container'>    
    <form ref={form} onSubmit={sendEmail}>
    <h3 style={{color:"#e93467",justifyContent:"center",marginLeft:"45%",fontSize:"28"}}>Contact Us</h3><br/>
    <label>Name</label>
    <input type="text" name="name" /><br/>
    <label>Email</label>
    <input type="email" name="email" /><br/>
    <label>Message</label>
    <textarea name="message" /><br/>
    <input type="submit" style={{marginLeft:"30px"}}onClick={onFinish} value="Send" /><br/>
  </form>
  </div>
  )
}


export default Contact;



















// import React,{useRef } from 'react'
// 
// import emailjs from '@emailjs/browser';
// const Contact = () => {
 
//   const layout = {
//     labelCol: { span: 8 },
//     wrapperCol: { span: 16 },
//   };
//   const tailLayout = {
//     wrapperCol: { offset: 8, span: 16 },
//   };
//   const onFinish = (values) => {
//     console.log('Success:', values);
//     message.success("Your Success Contact ");
//     emailjs.sendForm('gmail', 'template_4yf30dr',Form.current,'7OZQAEujIJZdz9J_l')
//     .then((result) => {
//         console.log(result.text);
//         console.log("Success");
//     }, (error) => {
//         console.log(error.text);
//     });
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

//   return (
//     <div className='contact-wrapper'>
//     <Form
//     {...layout}
//     name="basic"
//     initialValues={{ remember: true }}
//     onFinish={onFinish}
//     onFinishFailed={onFinishFailed}
//     className="contact-form-container"
//     ref={Form}
//   >
//       <Form.Item
//         label="Full Name"
//         name="name"
//       >
//         <Input style={{ width:"29vw",height: 50 }}/>
//       </Form.Item>

//       <Form.Item
//         label="Email"
//         name="email"
//         style={{marginLeft:"-7%"}}
//       >
//         <Input style={{ marginLeft:"6%",width:"29vw",height: 50 }}/>
//       </Form.Item>

//       <Form.Item
//         label="Message"
//         name="message"
//       >
//         <Input.TextArea style={{ width:"63vw",height: 100 }} />
//       </Form.Item>

//       <Form.Item>
//         <Button type="primary" htmlType="submit"  style={{marginLeft:"50%",marginBottom:"200px",width:"29vw",height: 50,background:"#e93467"}}>
//           Send Message
//         </Button>
//       </Form.Item>
//   </Form>
//   </div>
//   )
// }

// export default Contact;
//     // <Row  justify="center"  style={{padding:"1%",height:"680px",width:"100vw"}}>
//     // <Form
//     //   name="basic"
//     //   initialValues={{ remember: true }}
//     //   onFinish={onFinish}
//     //   onFinishFailed={onFinishFailed}
//     // >
    
//     // </Form>
//     // </Row>