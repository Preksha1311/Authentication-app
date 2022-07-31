import React, {useState} from "react";
import "./register.css";
import axios from "axios"

const Register = () => {

    const [user, setUser]= useState({
        name :"",
        email :"",
        password :"",
        reEnterPassword :""
    })

    const handleChange = e =>{
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const register =()=>{
        const{name, email, password, reEnterPassword} = user
        if(name && email && password && (password===reEnterPassword)){
          axios.post("http:localhost:9002/register",user)
          .then(res=>console.log(res))
        } else{
          alert("invalid input")
        }
    }

  return <div className="register">
    {console.log(user)}
  <h1>Register</h1>
<input type="text" name="name" value={user.name} onChange={ handleChange }placeholder="Name" />
<input type="text" name="email" value={user.email} onChange={ handleChange }placeholder="Email" />
<input type="password" name="password" value={user.password} onChange={ handleChange }placeholder="Password" />
<input type="password" name="reEnterPassword" value={user.reEnterPassword} onChange={ handleChange }placeholder="Re-enter Password" />
<div className="button" onClick={register}>Register</div>
<div>or</div>
<div className="button">Login</div>
</div>
};

export default Register;
