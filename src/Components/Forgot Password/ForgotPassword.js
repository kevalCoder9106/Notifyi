import { useState } from 'react'
import './ForgotPassword.css'
import ValidateEmail from '../../Packages/ValidateEmail'

const ForgotPassword = (props) => {
    const [username,setUsername] = useState("")
    // const [email,setEmail] = useState("")
    const [otp,setOpt] = useState("")
    const [password,setPassword] = useState("")
    const [isEmailValid,setEmailValidation] = useState(false)
    const [generatedOtp,setGeneratedOTP] = useState(0)

    const validateEmail = (email) => {
        const validateEmail = new ValidateEmail(email)
        const [emailValidation,genOtp] = validateEmail.validate(email) // Step 1: will validate email and sends the otp (in package)

        console.log(email)

        if (emailValidation === true){
            setEmailValidation(emailValidation) // Step 2: if email got validated, opt and new password field will get activated
            setGeneratedOTP(genOtp)
            console.log(genOtp) // *************************** dev only *************************** //
        }
        else{
            alert("Invalide email!")
        }
    }

    const fetchEmail = () => {
        // !!!!!!!!!!!!!!!! fetch email !!!!!!!!!!!!!!!!
        fetch('http://localhost:300/fetchemail',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({username:username})
        })
        .then(resp => resp.json())
        .then(result => {
            if (result !== 'Failed'){
                validateEmail(result) // validating email
            }
        })
    }

    const changePassword = () => {
        if (isEmailValid && password !== "" && password !== " "){
            

            // Step 3: will confirm otp
            if (otp === generatedOtp){
                // !!!!!!!!!!!!!!!!!!!!!!!!! Changes password here !!!!!!!!!!!!!!!!!!!!!!!!
                fetch('http://localhost:300/changepassword',{
                    method:'put',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({username:username,password:password})
                })
                .then(resp => resp.json())
                .then(result => {
                    if (result === "Success"){
                        // Goto login screen
                        alert("Password changed successfully!")
                    }
                    else{
                        throw Error
                    }
                })
                .catch(err => console.log('Error changing password'))
            }
            else{
                alert("Invalide OTP")
            }
        }
    } 

    return(
        <div className="fp-container background">
            <h1 className='font-cursive'>Notifyi</h1>
            <div className='fp-container-box'>
                <h2 className='font-cursive'>Forgot Password</h2>
                <div className='field-container'>
                    <div className='sub-field inc-email'> {/* specifying inc-email in class so that, send otp button and email field can come in one line */}
                        <input type='text' placeholder='Username' className='font-mono' onChange={e => setUsername(e.target.value)}></input>
                        <button className='font-mono' onClick={fetchEmail}>Send OTP</button>    
                    </div>
                    {
                        isEmailValid === true
                        ?
                            <div className='sub-field'>
                                <input type='text' placeholder='OTP' className='font-mono' onChange={e => setOpt(parseInt(e.target.value))}></input>
                                <input type='text' placeholder='New Password' className='font-mono' onChange={e => setPassword(e.target.value)}></input>
                            </div>
                        :
                            console.log("email isnt validated")
                    }
                </div>
                <button className='font-mono' onClick={changePassword}>Change Password</button>
                <div className='links'>
                    <h4><a className='link font-mono' onClick={() => props.updateRoute(0)}>Back to login</a></h4>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword