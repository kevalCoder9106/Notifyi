import './Login.css'
import { useState } from 'react'

const Login = (props) => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    return(
        <div className="login-container background">
            <h1 className='font-cursive'>Notifyi</h1>
            <div className='login-container-box'>
                <h2 className='font-cursive'>Login</h2>
                <div className='field-container'>
                    <input type='text' placeholder='Username' className='font-mono' onChange={e => setUsername(e.target.value)}></input>
                    <input type='password' placeholder='Password' className='font-mono' onChange={e => setPassword(e.target.value)}></input>
                </div>
                <button className='font-mono' onClick={() => props.onLogin(username,password,true)}>Login</button>
                <div className='links'>
                    <h4><a href='#0' className='link font-mono' onClick={() => props.updateRoute(2)}>Forgot password ?</a></h4>
                    <h4><a href='#0' className='link font-mono' onClick={() => props.updateRoute(1)}>Create account</a></h4>
                </div>
            </div>

        </div>
    )
}

export default Login