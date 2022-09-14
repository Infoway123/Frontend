import React from 'react'
import { useState } from 'react'
import axios from 'axios'
export default function Form() {
    const [User,setUser]=useState({
        userid:"",
        name:"",
        surname:"",
      email:"",
      password:"",
      mobile:"",
      projects:"",
      friends:"",
      skillsets:"",
      experience:"",
      description:""
    })
    const handleChange = (event)=>
    {//event.persist();
         setUser((User)=>({
         ...User,
         [event.target.name]:event.target.value,
     
     })
     )
     console.log(event.target.value)
 //console.log(this.name)
    }
  /*  const handleNameChange = (event)=>
   {//event.persist();
        setUser((User)=>({
        ...User,
        name:event.target.value,
    
    })
    
    )
    console.log(event.target.value)
//console.log(this.name)
}
    const handleSurnameChange = (event)=>
    {
        event.persist();
        setUser((User)=>({
        ...User,
        surname:event.target.value,
    })
    )
    console.log(event.target.value);
   // console.log(this.surname)
}
    const handlePasswordChange = (event)=>
    {//event.persist();
        setUser((User)=>({
        ...User,
        password:event.target.value,
    }))
    console.log(event.target.value);
    //console.log(this.password)
}
    const handleEmailChange = (event)=>
    {//event.persist();
        setUser((User)=>({
        ...User,
        email:event.target.value,
    }))
    console.log(event.target.value);
    //console.log(this.email)
}
    const handleMobileChange = (event)=>
    {//event.persist();
        setUser((User)=>({
        ...User,
        mobile:event.target.value,
    }))
    console.log(event.target.value);
   // console.log(this.mobile)
}
    const handleProjectsChange = (event)=>
    {//event.persist();
        setUser((User)=>({
        ...User,
        projects:event.target.value,
    }))
    console.log(event.target.value);
    //console.log(this.projects)

}
    const handleFriendsChange = (event)=>
    {//event.persist();
        setUser((User)=>({
        ...User,
        friends:event.target.value,
    }))
    console.log(event.target.value);
    //console.log(this.friends)
}
    const handleSkillsetsChange = (event)=>
    {//event.persist();
        setUser((User)=>({
        ...User,
        skillsets:event.target.value,
    }))
    console.log(event.target.value);
    //console.log(this.skillsets)
}
    const handleExperienceChange = (event)=>
    {//event.persist();
        setUser((User)=>({
        ...User,
        experience:event.target.value,
    }))
    console.log(event.target.value);
   // console.log(this.experience)
}
    const handleDescriptionChange = (event)=>
    {//event.persist();
        setUser((User)=>({
        ...User,
        description:event.target.value,
    }))
    console.log(event.target.value);
    //console.log(this.description)
}*/

const handleGet = (event)=>{
    axios.get('http://localhost:3000/users/fetchdata',{
        headers:{
        authorization:" Bearer "+localStorage.token
    }})
.then(response=>console.log(response.data)) 
.catch((error)=>(console.log(error)))
}
   
const handleSubmit = (event)=>{
        alert(User)
        event.preventDefault();
/*console.log("success");
console.log(event);*/
//var a= JSON.stringify(data)
/*axios.post('http://localhost:3000/users/submit',User)
      .then(res => {
        console.log(res);

        console.log(res.data);
        
      })
      .catch(error=>{console.log(error)})*/
     // var a = JSON.stringify(User)
      axios({
        method: "post",
        url: "http://localhost:3000/users/submit",
        data:{
            User
        }
    }).then(response=>{
        const token = response.data.token
        localStorage.setItem("token",token)
        console.log(response.data.token)
    })

      
     /* axios.post('http://localhost:3000/users/submit', {
       name: 'Finn',
        surname: 'Williams'
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });*/
    }
   
  return (
    <div>
        <form onSubmit={handleSubmit}>
        User Id:
            <input type="text" name="userid" onChange={handleChange} value={User.userid} />
            <br></br>
            Person Name:
            <input type="text" name="name" onChange={handleChange} value={User.name} />
            <br></br>
            Person Surname:
            <input type="text" name="surname" onChange={handleChange} value={User.surname} />
            <br></br>
            Email:
            <input type="text" name="email" onChange={handleChange} value={User.email} />
            <br></br>
            Password
            <input type="text" name="password" onChange={handleChange} value={User.password} />
            <br></br>
            Mobile:
            <input type="text" name="mobile" onChange={handleChange} value={User.mobile} />
            <br></br>
            Projects:
            <input type="text" name="projects" onChange={handleChange} value={User.projects} />
            <br></br>
            Friends:
            <input type="text" name="friends" onChange={handleChange} value={User.friends} />
            <br></br>
            Skillsets:
            <input type="text" name="skillsets" onChange={handleChange} value={User.skillsets} />
            <br></br>
            Experience:
            <input type="text" name="experience" onChange={handleChange} value={User.experience} />
            <br></br>
            Description:
            <input type="text" name="description" onChange={handleChange} value={User.description} /> 
          
          <button type="submit">Add</button>
          
        </form>
        <button onClick={handleGet} >Submit</button>
      </div>
  )
}
