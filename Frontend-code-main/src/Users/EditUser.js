import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {

let navigate=useNavigate()

const {id} = useParams()
const [user,setuser]=useState({
  name:"",
  username:"",
  email:""
})


const {name,username,email}=user


const onInputChange=(e)=>{
 setuser({...user,[e.target.name]:e.target.value})
}
useEffect(()=>{
    loadUsers();
},[]);

const onSubmit = async(e)=> {
e.preventDefault();
await axios.put(`http://localhost:8080/user/${id}`,user);
navigate("/");
};

const loadUsers = async()=>{
    const result = await axios.get( `http://localhost:8080/user/${id}`);
    setuser(result.data)
}

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Edit User</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input 
            type={'text'}
            className='form-control'
            placeholder='Enter your name'
           name='name'  
           value={name}
           onChange={(e)=>onInputChange(e)}
             ></input>  
              </div>
              <div className='mb-3'>
            <label htmlFor='username' className='form-label'>
              Username
            </label>
            <input 
            type={'text'}
            className='form-control'
            placeholder='Enter your username'
           name='username' 
           value={username}  
           onChange={(e)=>onInputChange(e)}  
             ></input>  
              </div>
              <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              email
            </label>
            <input 
            type={'text'}
            className='form-control'
            placeholder='Enter your email'
           name='email'
           value={email} 
           onChange={(e)=>onInputChange(e)}     
             ></input>  
              </div>
             <button type="submit" className='btn btn-outline-primary'>submit</button>
             <Link className='btn btn-outline-danger mx-2'to="/ ">cancel</Link>
             </form>
        </div>
      </div>
      
      </div>
  )
}
