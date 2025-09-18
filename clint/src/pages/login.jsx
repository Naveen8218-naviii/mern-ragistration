import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Login = () => {


  const[email,setEmail]=useState()
  const[password,SetPassword]=useState()
const navigate=useNavigate()

  const submit=(e)=>{
    e.preventDefault();
axios.post("http://localhost:5000/login",{ email,password})
.then(result=>{
  console.log("login success full")
  if (result.data==="success") {
    alert("login successfully")
  navigate("/home")
}
else{
  alert("incorrect email or password")
}})
.catch(err=>{alert("password is incorrect")})
  }
  return (

  <div className='flex justify-center items-center bg-blue-600 w-full h-[100vh] '>
    <div className='flex flex-col bg-white h-auto w-[300px] p-2 rounded-lg'>
      <div >
<h1 className='mb-3 text-2xl  font-semibold'>Login</h1>
<form onSubmit={submit}>

<div className='mb-3 flex flex-col '>
  <label htmlFor="email" ><strong>Email</strong></label>
  <input type="text" placeholder='Enter Email' name="" onChange={(e)=>setEmail(e.target.value)} />
</div>
<div className='mb-3 flex flex-col '>
  <label htmlFor="password"><strong>Password</strong></label>
  <input type="password" placeholder='Enter Password' name=""  onChange={(e)=>SetPassword(e.target.value)}/>
</div>

<button type='submit' className='bg-green-700 text-white mb-3 p-3 w-full rounded-lg' >Login</button>

<p className='mb-3 '>Dont't have an account?</p>

<Link to={"/ragister"}><button className='bg-slate-400 mb-3 w-full rounded-lg'> Sign in</button></Link>
</form>

</div>

    </div>
</div>  )
}

export default Login