
// import { Table, Tag } from 'antd';


// const data = [
//   {
//     key: '1',
//     orderNumber: '12345',
//     date: '01/01/2023',
//     status: 'Shipped',
//     total: '$100.00',
//   },
//   {
//     key: '2',
//     orderNumber: '67890',
//     date: '01/02/2023',
//     status: 'Delivered',
//     total: '$200.00',
//   },
//   // ...
// ];
// const columns = [
//   {
//     title: 'Order Number',
//     dataIndex: 'orderNumber',
//     key: 'orderNumber',
//   },
//   {
//     title: 'Date',
//     dataIndex: 'date',
//     key: 'date',
//   },
//   {
//     title: 'Status',
//     dataIndex: 'status',
//     key: 'status',
//     render: (status) => {
//       let color;
//       if (status === 'Shipped') {
//         color = 'geekblue';
//       } else if (status === 'Delivered') {
//         color = 'green';
//       }
//       return (
//         <Tag color={color} key={status}>
//           {status.toUpperCase()}
//         </Tag>
//       );
//     },
//   },
//   {
//     title: 'Total',
//     dataIndex: 'total',
//     key: 'total',
//   },
// ];

// function OrderHistory() {
//   return (
//     <Table columns={columns} dataSource={data} />
//   );
// }
// export default OrderHistory;







// //  import React from 'react'
// // import "./Order.css"
// // export const Order = () => {
// //   return (
// //   <div className="main_container">
     
// //   <h1>Inner Beauty</h1>


  
// // <div className="container">
// // <div className="card ">
// // <div className=""><span ">Tracking Order No - </span><span >001698653lp</span></div>
// // <div className="">
// //   <div className="cardorder"><span >Shipped Via:</span> UPS Ground</div>
// //   <div className="cardorder"><span >Status:</span> Checking Quality</div>
// //   <div className="cardorder"><span >Expected Date:</span> APR 27, 2021</div>
// // </div>
// // <div class="card-body">
// //   <div >
// //     <div className="step completed">
// //       <div className="step-icon-wrap">
//         // <div className="step-icon"><i className="pe-7s-cart"></i></div>
// //       </div>
// //       <h4 className="step-title">Confirmed Order</h4>
// //     </div>
// //     <div className="step completed">
// //       <div className="step-icon-wrap">
// //         <div className="step-icon"><i className="pe-7s-config"></i></div>
// //       </div>
// //       <h4 className="step-title">Processing Order</h4>
// //     </div>
// //     <div className="step completed">
// //       <div className="step-icon-wrap">
// //         <div className="step-icon"><i class="pe-7s-medal"></i></div>
// //       </div>
// //       <h4 className="step-title">Quality Check</h4>
// //     </div>
// //     <div className="step">
// //       <div className="step-icon-wrap">
// //         <div className="step-icon"><i class="pe-7s-car"></i></div>
// //       </div>
// //       <h4 className="step-title">Product Dispatched</h4>
// //     </div>
// //     <div className="step">
// //       <div className="step-icon-wrap">
// //         <div className="step-icon"><i class="pe-7s-home"></i></div>
// //       </div>
// //       <h4 className="step-title">Product Delivered</h4>
// //     </div>
// //   </div>
// // </div>
// // </div>
// // <div class="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-sm-between align-items-center">
// // <div class="custom-control custom-checkbox mr-3">
// //   <input class="custom-control-input" type="checkbox" id="notify_me" checked="" />
// //   <label class="custom-control-label" for="notify_me">Notify me when order is delivered</label>
// // </div>
// // <div class="text-left text-sm-right"><a class="btn btn-outline-primary btn-rounded btn-sm" href="#">View Order Details</a></div>
// // </div>
// // </div>
// // </div>
// //   )
// // }
// // // export default Order;