import { useEffect, useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

function Cart(){

const [cart,setCart] = useState([]);
const [products,setProducts] = useState({});
const [total,setTotal] = useState(0);

useEffect(()=>{

const user = localStorage.getItem("userId");

if(!user){
window.location.href="/login";
return;
}

fetchCart();

},[]);


// ✅ FETCH CART + PRODUCTS
const fetchCart = async () => {

try{

const userId = localStorage.getItem("userId");

const cartRes = await API.get("/cart/"+userId);
const productRes = await API.get("/products");

setCart(cartRes.data);

let productMap = {};
let sum = 0;

productRes.data.forEach(p=>{
productMap[p.id] = p;
});

cartRes.data.forEach(item=>{
const product = productMap[item.productId];

if(product){
sum += product.price * item.quantity;
}
});

setProducts(productMap);
setTotal(sum);

}catch(error){

console.log(error);
toast.error("Error loading cart");

}

};


// ✅ REMOVE ITEM
const removeItem = async (id) => {

try{

await API.delete("/cart/"+id);

toast.success("Item removed");

fetchCart();

}catch(error){

console.log(error);
toast.error("Error removing item");

}

};


// ✅ PLACE ORDER (FIXED)
const placeOrder = async () => {

try{

const userId = localStorage.getItem("userId");

await API.post("/orders",{
userId:userId,
totalAmount:total
});

// ✅ Always success (since backend already working)
toast.success("Order Placed Successfully 🎉");

// clear UI
setCart([]);
setTotal(0);

fetchCart();

}catch(error){

console.log(error.response || error);
toast.error("Error placing order");

}

};


return(

<div className="container mt-4">

<h2 className="mb-4">Your Cart</h2>

{cart.length === 0 ? (
<h4>Your cart is empty</h4>
) : (

<div className="row">

{/* LEFT SIDE */}
<div className="col-md-8">

{cart.map((c)=>{

const product = products[c.productId];

return(

<div className="card mb-3 shadow-sm" key={c.id}>

<div className="row g-0 align-items-center">

<div className="col-md-3">
<img 
src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
className="img-fluid rounded-start"
alt="product"
/>
</div>

<div className="col-md-6">

<div className="card-body">

<h5>{product?.name}</h5>

<p className="text-muted">
₹ {product?.price}
</p>

<p>Quantity: {c.quantity}</p>

</div>

</div>

<div className="col-md-3 text-center">

<p><strong>₹ {product ? product.price * c.quantity : 0}</strong></p>

<button 
className="btn btn-danger btn-sm"
onClick={()=>removeItem(c.id)}
>
Remove
</button>

</div>

</div>

</div>

);

})}

</div>

{/* RIGHT SIDE */}
<div className="col-md-4">

<div className="card p-3 shadow-sm">

<h4>Total</h4>

<h3 className="text-success">₹ {total}</h3>

<button 
className="btn btn-success w-100 mt-3"
onClick={placeOrder}
>
Place Order
</button>

</div>

</div>

</div>

)}

</div>

);

}

export default Cart;