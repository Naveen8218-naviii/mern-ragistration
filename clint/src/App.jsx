import React from 'react'
import { useState } from 'react'

const App = () => {

  const[name,setName]=useState()
  const[email,setEmail]=useState()
  const[password,SetPassword]=useState()
  return (

  <div className='flex justify-center items-center bg-blue-600 w-full h-[100vh] '>
    <div className='flex flex-col bg-white h-auto w-[300px] p-2 rounded-lg'>
      <div >
< h1 className='mb-3 text-2xl  font-semibold'>Ragister</h1>

<div className='mb-3 flex flex-col '>
  <label htmlFor="username"><strong>Name</strong></label>
  <input type="text" placeholder='Enter Username' onChange={(e)=>setName(e.target.value)}/>
</div>
<div className='mb-3 flex flex-col '>
  <label htmlFor="email" ><strong>Email</strong></label>
  <input type="text" placeholder='Enter Email' name="" id="" onChange={(e)=>setEmail(e.target.value)} />
</div>
<div className='mb-3 flex flex-col '>
  <label htmlFor="password"><strong>Password</strong></label>
  <input type="password" placeholder='Enter Password' name="" id="" onChange={(e)=>SetPassword(e.target.value)}/>
</div>

<button type='sumbit' className='bg-green-700 text-white mb-3 p-3 w-full rounded-lg' >Register</button>

<p className='mb-3 '>Already Have an Account </p>

<button className='bg-slate-400 mb-3 w-full rounded-lg'> Login</button>
</div>

    </div>
</div>  )
}

export default App