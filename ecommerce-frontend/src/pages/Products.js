import { useEffect, useState } from "react";
import API from "../services/api";

function Products(){

const [products,setProducts] = useState([]);

useEffect(()=>{

const user = localStorage.getItem("userId");

if(!user){
window.location.href="/login";
}
fetchProducts();

},[]);

const fetchProducts = async () => {

try{

const response = await API.get("/products");

setProducts(response.data);

}catch(error){

console.log("Error fetching products");

}

};

//Add to cart function
const addToCart = async (productId) => {

try{

const userId = localStorage.getItem("userId");

await API.post("/cart",{
userId:userId,
productId:productId,
quantity:1
});

alert("Product Added To Cart");

}catch(error){

console.log(error);
alert("Error adding to cart");

}

};

return (

<div className="container mt-4">

<h2 className="mb-4">Products</h2>

<div className="row">

{products.map((p)=>(

<div className="col-md-3 mb-4" key={p.id}>

<div className="card h-100 shadow-sm">

<img 
src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
className="card-img-top"
/>

<div className="card-body">

<h5 className="card-title">{p.name}</h5>

<p className="card-text text-muted">
{p.description}
</p>

<p><strong>₹ {p.price}</strong></p>

<input 
type="number"
min="1"
defaultValue="1"
className="form-control mb-2"
/>

<button 
className="btn btn-success w-100"
onClick={()=>addToCart(p.id)}
>
Add To Cart
</button>

</div>

</div>

</div>

))}

</div>

</div>

);

}

export default Products;