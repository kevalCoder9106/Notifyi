import {useEffect, useState} from 'react'
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ForgotPassword from './Components/Forgot Password/ForgotPassword';
import Home from './Components/Home/Home';

/* 
for those who havent made this app and just here to see my code and intrested in routes
login and register routes will be inside App.js
and change pass routes will be inside ForgotPassword.js cuz i need to use multiple routes and state to achive that thing
*/

const App = () => {
  const [route,setRoute] = useState(0) // 0: login, 1: register, 2: forgot password, 3: home page

  // updating route ez pz
  const updateRoute = (route_value) => {
    setRoute(route_value)
  }

  // everytime page loads i call this function
  useEffect(() => {
    isUserLoggedIn()
  })

  // routes
  const onLogin = (p_username,p_password,show_alert) => {
    // !!!!!!!!!!!!!!!!!!!! Login here !!!!!!!!!!!!!!!!!!!!!!!!!
    const userData = {username:p_username,password:p_password}

    fetch('http://localhost:300/login', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(userData)
    })
    .then(resp => resp.json())
    .then(result => {
        if (result === "Success"){
            setUserCreds(userData.username,userData.password)
            updateRoute(3)
        }
        else{
            throw Error;
        }
    })
    .catch(err => {
        if (show_alert){
            alert('Error loging in...')
        }
    })
  }

  const onRegister = (username,email,password) => {
    const userData = {username:username,email:email,password:password}
    // !!!!!!!!!!!!!!!!!!!!! register user !!!!!!!!!!!!!!!!! //
    fetch('http://localhost:300/register',{
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(userData)
    })
    .then(resp => resp.json())
    .then(result => {
      console.log(result)
      if (result === 'Success'){
        setUserCreds(userData.username,userData.password)
        updateRoute(3)
      }
      else{
        throw Error
      }
    })
    .catch(err => alert('Error registering user'))
  }


  // session setup
  const getUserCreds = () => {
    const userCreds = JSON.parse(localStorage.getItem('userCreds'))
    return userCreds
  }
  const setUserCreds = (username,password) => {
      localStorage.setItem('userCreds',JSON.stringify({username,password}))
  }
  const resetUserCreds = () => {
    updateRoute(0)
    setUserCreds('','')
  }
  const isUserLoggedIn = () => {
      const userCreds = getUserCreds()
      onLogin(userCreds.username,userCreds.password,false)
  }

  return (
    <div className="App">
      {
          route === 0
        ?
          <Login updateRoute={updateRoute} onLogin={onLogin}/>
        :
          route === 1
        ?
          <Register updateRoute={updateRoute} onRegister={onRegister}/>
        :
          route === 2
        ?
          <ForgotPassword updateRoute={updateRoute}/>
        :
          route === 3
        ?
          <Home resetUserCreds={resetUserCreds}/>
        :
          console.log("error please reload the page") // home page
      }
    </div>
  );
}

export default App;
