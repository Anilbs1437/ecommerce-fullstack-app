import { useEffect, useState } from "react";
import API from "../services/api";

function Orders(){

const [orders,setOrders] = useState([]);

useEffect(()=>{
const user = localStorage.getItem("userId");

if(!user){
window.location.href="/login";
}
fetchOrders();
},[]);

const fetchOrders = async () => {

try{

const userId = localStorage.getItem("userId");

const response = await API.get("/orders/"+userId);

setOrders(response.data);

}catch(error){

console.log("Error fetching orders");

}

};

return(

<div>

<h2>Order History</h2>

<table border="1">

<thead>

<tr>

<th>ID</th>
<th>Total Amount</th>
<th>Order Date</th>

</tr>

</thead>

<tbody>

{orders.map((o)=>(
<tr key={o.id}>

<td>{o.id}</td>
<td>{o.totalAmount}</td>
<td>{o.orderDate}</td>

</tr>
))}

</tbody>

</table>

</div>

);

}

export default Orders;