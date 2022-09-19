import React, { useState } from 'react'
import axios from 'axios'


export default function Login() {
    const [User, setUser] = useState({
        email:"",
        password:"",
        rememberMe:false,
        admin:false
    })
    const handleChange = (event)=>
   {
        setUser((User)=>({
        ...User,
        [event.target.name]:event.target.value,
    
    })
    )
    console.log(User)
    console.log(event.target.value)
}
   const handleRememberMe=(event)=>{
     console.log(event.target)
     setUser((User)=>({
        ...User,
         rememberMe:!User.rememberMe
    
    })
    )
       }

       const handleAdmin=(event)=>{
        console.log(event.target)
        setUser((User)=>({
           ...User,
            admin:!User.admin
       
       })
       )
          }



const handleLogout = ()=>{
    localStorage.removeItem("token")
}

const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(User)
  axios({
    method: "post",
    url: "http://localhost:3000/users/login",
    data:{
        /*email:User.email,
        password:User.password*/
        User
    }
}).then((res)=>{console.log("success")
      const token = res.data.token
      localStorage.setItem("token",token)
      console.log(res.data.token)
})
.catch((err)=>{console.log("Error")})
}

 
    return (
        <div>
            <form onSubmit={handleSubmit}>
        User Email:
            <input type="text" name="email" onChange={handleChange} value={User.email} />
            <br></br>
        User Password:
            <input type="text" name="password" onChange={handleChange} value={User.password} />
            <br></br>
            <input type="checkbox" name="rememberMe" onChange={handleRememberMe} value={User.rememberMe}></input>Remember Me<br></br>
            <input type="checkbox" name="admin" onChange={handleAdmin} value={User.admin}></input>Admin<br></br>
            <button type="submit">Login</button>
            </form>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
