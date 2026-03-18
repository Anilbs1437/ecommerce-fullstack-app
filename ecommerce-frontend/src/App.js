import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(){

return(

<Router>

<div>

<h1 className="text-center mt-3">E-Commerce Application</h1>

<Navbar/>

<Routes>

<Route path="/signup" element={<Signup/>} />
<Route path="/login" element={<Login/>} />
<Route path="/products" element={<Products/>} />
<Route path="/cart" element={<Cart/>} />
<Route path="/orders" element={<Orders/>} />

</Routes>

{/* ✅ Toast Container must be here */}
<ToastContainer position="top-right" autoClose={2000} />

</div>

</Router>

);

}

export default App;