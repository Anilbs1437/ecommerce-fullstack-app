import { Link } from "react-router-dom";

function Navbar(){

const logout = () => {

localStorage.removeItem("userId");
window.location.href="/login";

};

return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">

<div className="container">

<Link className="navbar-brand" to="/products">
E-Commerce
</Link>

<div>

<Link className="btn btn-outline-light me-2" to="/signup">Register</Link>

<Link className="btn btn-outline-light me-2" to="/login">Login</Link>

<Link className="btn btn-outline-light me-2" to="/products">Products</Link>

<Link className="btn btn-outline-light me-2" to="/cart">Cart</Link>

<Link className="btn btn-outline-light me-2" to="/orders">Orders</Link>

<button className="btn btn-danger" onClick={logout}>
Logout
</button>

</div>

</div>

</nav>

);

}

export default Navbar;