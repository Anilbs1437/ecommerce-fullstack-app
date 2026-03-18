import { useState } from "react";
import API from "../services/api";

function Login() {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin = async (e) => {
e.preventDefault();

try{

const response = await API.post("/users/login",{
email,
password
});

if(response.data){

localStorage.setItem("userId", response.data.id);

alert("Login Successful");

window.location.href="/products";

}

}catch(error){
alert("Login Failed");
}

};

return (

<div className="container mt-5">

<div className="row justify-content-center">

<div className="col-md-4">

<div className="card p-4">

<h3 className="text-center mb-3">Login</h3>

<form onSubmit={handleLogin}>

<div className="mb-3">

<input
type="email"
className="form-control"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

</div>

<div className="mb-3">

<input
type="password"
className="form-control"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

</div>

<button className="btn btn-primary w-100">
Login
</button>

</form>

</div>

</div>

</div>

</div>

);

}

export default Login;