export const getAllProducts = () => {
  return fetch("https://inner-beauty.onrender.com/api/product/list",{
    headers: { 
      "Content-Type": "application/json",
     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,   
   },
  }).then((res) => res.json());
};

export const getCart = () => {
  return fetch("https://inner-beauty.onrender.com/api/cart",{
    headers: { 
      "Content-Type": "application/json",
     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,   
   },
  }).then((res) => res.json());//cart table 5 product
};

export const addToCart = (id) => {
  console.log(id)
  return fetch("https://inner-beauty.onrender.com/api/product/add-to-cart/"+ id, {
  method: "POST",
  headers: { 
    "Content-Type": "application/json",
   Authorization: `Bearer ${localStorage.getItem('accessToken')}`,   
 }}).then((res) => res.json())
};

export const addDelete = (id) => {
  return fetch("https://inner-beauty.onrender.com/api/cart/remove/"+ id, {
  method: "DELETE",
  headers: { 
    "Content-Type": "application/json",
   Authorization: `Bearer ${localStorage.getItem('accessToken')}`,   
 }}).then((res) => res.json())
};

export const CancelItem = () => {
  return fetch("https://inner-beauty.onrender.com/api/cart/cancel",{
  method:"PUT",
  headers: { 
    "Content-Type": "application/json",
   Authorization: `Bearer ${localStorage.getItem('accessToken')}`,   
 }}).then((res) => res.json())
};
//


export const OrderDetails = (id) => {
  return fetch("https://inner-beauty.onrender.com/api/order/details/"+ id ,{
    headers: { 
      "Content-Type": "application/json",
     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,   
   }
  }).then((res) => res.json());//cart table 5 product
};
export const CreateOrder = () => {
  return fetch("https://inner-beauty.onrender.com/api/order/create", {
  method: "POST",
  headers: { 
    "Content-Type": "application/json",
   Authorization: `Bearer ${localStorage.getItem('accessToken')}`,   
 }}).then((res) => res.json())

};
export const Uppdata = (id,quantity) => {
  return fetch("https://inner-beauty.onrender.com/api/cart/quantity/"+ id, {
  method:"PUT",
  headers: { 
    "Content-Type": "application/json",
   Authorization: `Bearer ${localStorage.getItem('accessToken')}`,   
 },
 body: JSON.stringify({
  product: [
    {
      quantity: quantity,
    },
  ],
}),
}).then((res) => res.json())
};
export const CancelOrder = (id) => {
  return fetch("https://inner-beauty.onrender.com/api/order/cancel/:id"+ id, {
  method:"PUT",
  headers: { 
    "Content-Type": "application/json",
   Authorization: `Bearer ${localStorage.getItem('accessToken')}`,   
 }
}).then((res) => res.json())
};