import React, { useState ,useEffect } from 'react'
//import axios from 'axios'

export default function Users1() {
    const [resourceType,setResourceTyoe]= useState('fetchdata')
   const [data,setData] = useState([])
     
    console.log("render")
    useEffect(() => {
        fetch('http://localhost:3000/users/fetchdata/${resourceType}')
        .then(response=>response.json())
        .then(json => console.log(json))
    }, [resourceType])
    
    return (
        <>
        <div>
             <button onClick={() => setResourceTyoe('fetchdata')}>FetchData</button>
        </div>
        <h4>{resourceType}</h4>
        {/* {data.map(data =>{
            return <pre>{JSON.stringify(data)}</pre>
        })} */}
        </>
        
    )
    
}
