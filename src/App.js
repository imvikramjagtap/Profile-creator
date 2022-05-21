import { useState, useEffect } from 'react';
import './App.css';
import { getUsers } from './API/services';
import Signin from './Components/Signin';
import Userprofile from './Components/Userprofile';
import Users  from './Components/Users';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; 

function App() {
  const [passID, setPassID] = useState();
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    getUsers()
      .then (use=>{
          setUsers(use);
      })
},[])
  

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Signin setPassID={setPassID} passID={passID} users={users}/>} />
        <Route exact path="/users" element={<Users setPassID={setPassID} users={users}/>} />
        <Route exact path ="/signup" element={<Signup users={users}/>}/>
        <Route exact path={`/users/${passID}`} element={<Userprofile id={passID} users={users}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
