import { useState } from "react";
import API from "../services/api";

function Signup() {

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleSubmit = async (e) => {
e.preventDefault();

try{

await API.post("/users/signup",{
name,
email,
password,
role:"USER"
});

alert("Signup Successful");

}catch(error){
alert("Error during signup");
}

};

return (

<div className="container mt-5">

<div className="row justify-content-center">

<div className="col-md-4">

<div className="card p-4">

<h3 className="text-center mb-3">Register</h3>

<form onSubmit={handleSubmit}>

<div className="mb-3">

<input
className="form-control"
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

</div>

<div className="mb-3">

<input
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

<button className="btn btn-success w-100">
Register
</button>

</form>

</div>

</div>

</div>

</div>

);

}

export default Signup;