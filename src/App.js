
import Signin from './Component/Signin';
import  Signup  from './Component/Signup';
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; 
import UserProfile from './Component/UserProfile';

function App() {

  const [passID, setPassID] = useState();
  
    
  return (


    <div className="container">
    <Router>
        
        <Routes>
          <Route exact path="/profile" element={<UserProfile id={passID}/>}/>
          <Route exact path="/" element={<Signin setPassID={setPassID}/>}/>
          <Route exact path ="/signup" element={<Signup/>}/>
          {/* <Route exact patch ="/admin/users" element={<Profile/>}></Route> */}
          
        </Routes>
       </Router>
      </div>
  
  );
}

export default App;
