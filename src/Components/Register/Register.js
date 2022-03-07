import './Register.css'

const Register = () => {
    return(
        <div className="register-container background">
            <h1 className='font-cursive'>Notifyi</h1>
            <div className='register-container-box'>
                <h2 className='font-cursive'>Register</h2>
                <div className='field-container'>
                    <input type='text' placeholder='Username' className='font-mono'></input>
                    <input type='text' placeholder='Email' className='font-mono'></input>
                    <input type='password' placeholder='Password' className='font-mono'></input>
                </div>
                <button className='font-mono'>Register</button>
                <div className='links'>
                    <h4><a className='link font-mono'>Back to login</a></h4>
                </div>
            </div>
        </div>
    )
}

export default Register