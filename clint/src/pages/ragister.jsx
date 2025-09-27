import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import{ Link ,useNavigate}from 'react-router-dom'


const Ragister = () => {

  const[name,setName]=useState()
  const[email,setEmail]=useState()
  const[password,SetPassword]=useState()

const navigate=useNavigate()
  const submit=(e)=>{
    e.preventDefault();
axios.post("mern-ragistration-a4vb-ntz6q3f9p-naveens-projects-f84b6de5.vercel.app/ragister",{name,email,password})
.then(result=> {if (result.data=="Account created") {
  alert("Account created")
  navigate("/login")
}
else{
alert("Email already exist")
}})
.catch(err=>{alert("something went wrong");
console.log(err)})
  }
  return (

  <div className='flex justify-center items-center bg-blue-600 w-full h-[100vh] '>
    <div className='flex flex-col bg-white h-auto w-[300px] p-2 rounded-lg'>
      <div >
< h1 className='mb-3 text-2xl  font-semibold'>Ragister</h1>
<form onSubmit={submit}>
<div className='mb-3 flex flex-col '>
  <label htmlFor="username"><strong>Name</strong></label>
  <input type="text" placeholder='Enter Username' onChange={(e)=>setName(e.target.value)}/>
</div>
<div className='mb-3 flex flex-col '>
  <label htmlFor="email" ><strong>Email</strong></label>
  <input type="text" placeholder='Enter Email' name=""  onChange={(e)=>setEmail(e.target.value)} />
</div>
<div className='mb-3 flex flex-col '>
  <label htmlFor="password"><strong>Password</strong></label>
  <input type="password" placeholder='Enter Password' name=""  onChange={(e)=>SetPassword(e.target.value)}/>
</div>

<button type='submit' className='bg-green-700 text-white mb-3 p-3 w-full rounded-lg' >Register</button>

<p className='mb-3 '>Already Have an Account </p>

<Link to="/login"><button className='bg-slate-400 mb-3 w-full rounded-lg'> Login</button></Link>
</form>

</div>

    </div>
</div>  )
}

export default Ragister
