import React, { useState } from 'react'
import axios from 'axios'

export default function Users() {
    const [data, setData] = useState([])
    const handleGet = (event)=>{
        axios.get('http://localhost:3000/users/fetchdata',{
            headers:{
            authorization:" Bearer "+localStorage.token
        }})
    .then(response=>{console.log(response.data)
    const users = response.data
    console.log(users)
    setData(users)
    console.log(data)
    })
    .catch((error)=>(console.log(error)))
    }

    return (
        
       <div>
             <button className="bg-slate-500 border-black p-2 rounded-md " onClick={handleGet}>FetchData</button>
             <div className="flex flex-wrap justify-around items-center" >
             {data.map(user=>{
                 return(
                     <div key={user._id}>
                       <h5>{user.name}</h5>
                       <h5>{user.surname}</h5>
                       <h5>{user.email}</h5>
                       <h5>{user.password}</h5>
                       <h5>{user.mobile}</h5>
                       <h5>{user.projects}</h5>
                       <h5>{user.friends}</h5>
                       <h5>{user.skillsets}</h5>
                       <h5>{user.experience}</h5>
                       <h5>{user.description}</h5>
                    </div>
                 )
             })}
             </div>
        </div>

    )
}
