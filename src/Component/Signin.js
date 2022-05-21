import { useState } from "react";
import { getUsers } from "../services/users";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"


export default function Signin(props){
    const [email, setEmail] = useState('');
    const [pass, setPass]= useState();
    const [user,setUser] = useState([]);
    const navigate = useNavigate();
    const [userNotFound, setUserNotFound] = useState(false);

    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    }

    const handlePassChange = (e) => {
        setPass(e.target.value)
    }

    getUsers()
      .then(user =>{
          setUser(user)
      });

      const finalUerDis = user.filter((usr)=>{
            return usr.email===email &&
                usr.password===pass
      })

       const handleSubmit =(e)=>{
            e.preventDefault();
           if(finalUerDis.length === 0){
            setUserNotFound(true);
            setTimeout(() => {
                setUserNotFound(false);
            },2000);
           }else{
               finalUerDis.map((i)=>{
                 return props.setPassID(i.id)
               })
            navigate("/profile")
           }
       } 


    return(
        <>
        <div className="container m-3 m-auto  d-flex p-5">
            <form className="bg-light m-auto p-4 rounded-3 shadow" onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={handleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={pass} onChange={handlePassChange} className="form-control" id="exampleInputPassword1" required/>
                </div>
                <div className="mb-3">
                    <p><strong>Don't have an account..?<Link to="/signup"> Signup Now</Link></strong></p>
                </div>
                {userNotFound && <p className="text-danger">Invalid Email or Password</p> }
                <div className="mb-3 text-center">
                <button type="submit" className="btn btn-primary text-center"><i className="bi bi-box-arrow-in-right"></i>Login</button> 
                </div>
               
             </form>
        </div>

        </>
    );
}