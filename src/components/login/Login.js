import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {

  const handleSubmit =(e) =>
  {
    e.preventDefault()
    localStorage.setItem('login',true)
  }
  const navigate = useNavigate()

useEffect(()=>
{let login = localStorage.getItem('login')
if(login)
{
   navigate('/')
}

})
  return (
    <div className='login'>
      <div className='login-container'>Login Here
        <form className='login-form'>
        <label htmlFor="">User Name</label>
          <input type="text" />
          <label htmlFor="">Password</label>
          <input type="password" />
          <button type='submit'onClick={handleSubmit}>Submit</button>
          
        </form>
      </div>
    </div>
  )
}

export default Login