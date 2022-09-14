import React, { useState } from 'react'
import axios from 'axios'

export default function ProjectForm() {
    const [Project ,setProject]=useState({
        name:"",
        creatorid:"",
        description:"",
        requirements:"",
        payment:"",
        status:"",
        leaderid:"",
        teamusers:""
    })
    const handleChange = (event)=>
    {
         setProject((Project)=>({
         ...Project,
         [event.target.name]:event.target.value,
     
     })
     )
     console.log(event.target.value)
 //console.log(this.name)
    }
    const handleGet = (event)=>{
        axios.get('http://localhost:3000/projects/fetchdata')
    .then(response=>console.log(response.data)) 
    .catch((error)=>(console.log(error)))
    }

    const handleSubmit = (event)=>{
        alert(Project)
        event.preventDefault();
     // var a = JSON.stringify(Project)
      axios({
        method: "post",
        url: "http://localhost:3000/projects/submit",
        data:{
            Project
        }
    });
};


    return (
        <div>
        <form onSubmit={handleSubmit}>
            Project Name:
            <input type="text" name="name" onChange={handleChange} value={Project.name} />
            <br></br>
            CreatorId:
            <input type="text" name="creatorid" onChange={handleChange} value={Project.creatorid} />
            <br></br>
            Description:
            <input type="text" name="description" onChange={handleChange} value={Project.description} />
            <br></br>
            Requirements:
            <input type="text" name="requirements" onChange={handleChange} value={Project.requirements} />
            <br></br>
            Payment:
            <input type="text" name="payment" onChange={handleChange} value={Project.payment} />
            <br></br>
            Status:
            <input type="text" name="status" onChange={handleChange} value={Project.status} />
            <br></br>
            LeaderId:
            <input type="text" name="leaderid" onChange={handleChange} value={Project.leaderid} />
            <br></br>
            Team Users:
            <input type="text" name="teamuserd" onChange={handleChange} value={Project.teamusers} />
            <br></br> 
          <button type="submit">Add</button>
          
        </form>
        <button onClick={handleGet} >Submit</button>  
        </div>
    )
}
