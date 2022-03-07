import {useState} from 'react'
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ForgotPassword from './Components/Forgot Password/ForgotPassword';

const App = () => {
  const [route,setRoute] = useState(0) // 0: login, 1: register, 2: forgot password, 3: home page

  const updateRoute = (route_value) => {
    setRoute(route_value)
  }

  return (
    <div className="App">
      {
          route === 0
        ?
          <Login updateRoute={updateRoute}/>
        :
          route === 1
        ?
          <Register updateRoute={updateRoute}/>
        :
          route === 2
        ?
          <ForgotPassword updateRoute={updateRoute}/>
        :
          console.log("in dev") // home page
      }
    </div>
  );
}

export default App;
