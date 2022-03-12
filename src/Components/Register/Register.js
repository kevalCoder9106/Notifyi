import './Register.css'
import { useState } from 'react'
import ValidateEmail from '../../Packages/ValidateEmail'

const Register = (props) => {
    const [email,setEmail] = useState("")
    const [otp,setOpt] = useState("")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [isEmailValid,setEmailValidation] = useState(false)
    const [generatedOtp,setGeneratedOTP] = useState(0)

    const validateEmail = (email) => {
        const validateEmail = new ValidateEmail(email)
        const [emailValidation,genOtp] = validateEmail.validate(email) // Step 1: will validate email and sends the otp (in package)

        if (emailValidation === true){
            setEmailValidation(emailValidation) // Step 2: if email got validated, opt and username and password field will get activated
            setGeneratedOTP(genOtp)
            console.log(genOtp) // *************************** dev only *************************** //
        }
        else{
            alert("Invalide email!")
        }
    }

    const sub_onRegister = () => {
        if (isEmailValid){
            if (otp === generatedOtp){
              props.onRegister(username,email,password)
          }
        }
    }

    return(
        <div className="register-container background">
            <h1 className='font-cursive'>Notifyi</h1>
            <div className='register-container-box'>
                <h2 className='font-cursive'>Register</h2>
                <div className='field-container'>
                    <div className='sub-field inc-email'>
                        <input type='text' placeholder='Email' className='font-mono' onChange={e => setEmail(e.target.value)}></input>
                        <button className='font-mono' onClick={() => validateEmail(email)}>Send OTP</button>
                    </div>
                    {
                        isEmailValid === true
                        ?
                            <div className='sub-field'>
                                <input type='text' placeholder='OTP' className='font-mono' onChange={e => setOpt(parseInt(e.target.value))}></input>
                                <input type='text' placeholder='Username' className='font-mono' onChange={e => setUsername(e.target.value)}></input>
                                <input type='password' placeholder='Password' className='font-mono' onChange={e => setPassword(e.target.value)}></input>
                            </div>
                        :
                            console.log('email isnt validated')
                    }
                </div>
                <button className='font-mono' onClick={sub_onRegister}>Register</button>
                <div className='links'>
                    <h4><a href='#0' className='link font-mono' onClick={() => props.updateRoute(0)}>Back to login</a></h4>
                </div>
            </div>
        </div>
    )
}

export default Register