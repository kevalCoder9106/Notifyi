import './Login.css'

const Login = () => {
    return(
        <div className="login-container background">
            <h1 className='font-cursive'>Notifyi</h1>
            <div className='login-container-box'>
                <h2 className='font-cursive'>Login</h2>
                <div className='field-container'>
                    <input type='text' placeholder='Username' className='font-mono'></input>
                    <input type='password' placeholder='Password' className='font-mono'></input>
                </div>
                <button className='font-mono'>Login</button>
                <div className='links'>
                    <h4><a className='link font-mono'>Forgot password ?</a></h4>
                    <h4><a className='link font-mono'>Create account</a></h4>
                </div>
            </div>

        </div>
    )
}

export default Login