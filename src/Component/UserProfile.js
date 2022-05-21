import { useEffect, useState } from "react";
import { editUser } from "../services/users";
import { useNavigate } from "react-router-dom";
// import { Profile } from "./Profile"

export default function UserProfile(props) {
  const navigate = useNavigate();
  
  const [profile, setProfile] = useState({});
  const [displayUser, setDisplayUser] = useState(false);
  const [displayInput, setDisplayInput] = useState(false);
  const[loading, setLoading] = useState(false);
  const [pageLoading ,setPageLoading] = useState(false);
//   const [userAdmin, setuserAdmin] = useState(false);
  const [editUserInput, setEditUser] = useState({
    name: "",
    password: "",
    email: "",
    age: "",
    phone: "",
    address: "",
    role: "",
  });

  function refreshUser() {
    fetch(`https://task1-json-server.herokuapp.com/users/${props.id}`)
      .then((data) => data.json())
      .then((item) => {
        setProfile(item);
      });
  }

  useEffect(()=>{
    refreshUser();
  })
  useEffect(() => {
        setPageLoading(true);
        setTimeout(() => {
            setPageLoading(false);
            setDisplayUser(true)
        }, 3000);
  },[]);

  

  // Edit
  const inputChange = (e) => {
    setEditUser((oldValue) => {
      return {
        ...oldValue,
        [e.target.name]: e.target.value,
      };
    });
  };

  const editBtn = (e) => {
    setEditUser({
      name: profile.name,
      password: profile.password,
      email: profile.email,
      age: profile.age,
      phone: profile.phone,
      address: profile.address,
      role: profile.role,
    });
    setDisplayUser(false);
    setDisplayInput(true);
  };

  const saveBtnHandler = (e) => {
    e.preventDefault();
    editUser(e.target.id, editUserInput);
    setLoading(true);
    setDisplayUser(false);
    setDisplayInput(false);
   
  
    setTimeout(() => {
         refreshUser();
        setDisplayUser(true);
      setDisplayInput(false);
      setLoading(false);
    }, 3000);
  };


  const LogOutBtn = (e)=>{
      e.preventDefault();
      navigate("/")
  }

  return (

    <>
      <div className="container ">
        <div className="rounded align-items-center   flex-wrap p-2">
          <div className={`rounded-3 bg-light shadow m-3 p-md-5 m-md-4 `} key={profile.id}>
          
            <div className={`text-center rounded-3 bg-${profile.role === 'ADMIN' ? "info" : "light"}`}>
              <h4 className="p-4">Hello..! <strong className={`text-${profile.role === 'ADMIN' ? "white" : "dark"}`}>{profile.name}</strong></h4>
            </div>
            {pageLoading && <div className="text-center">
                    <div class="spinner-grow text-primary" role="status">
                        <span class="sr-only"></span>
                    </div>
                    <div class="spinner-grow text-secondary" role="status">
                        <span class="sr-only"></span>
                    </div>
                    <div class="spinner-grow text-success" role="status">
                        <span class="sr-only"></span>
                    </div>
              </div>}

            <div>
              {displayUser && (
                <ul className="list-group ">
                  <li className={`list-group-item d-flex justify-content-between align-items-center bg-${profile.role === "ADMIN" ? "info" : "white" }`}>
                    <strong className={`text-${profile.role === "ADMIN" ? "white" : "dark"}`}>Email: </strong>
                    {profile.email}
                  </li>
                  <li className={`list-group-item d-flex justify-content-between align-items-center bg-${profile.role === "ADMIN" ? "info" : "white" }`}>
                    <strong className={`text-${profile.role === "ADMIN" ? "white" : "dark"}`}>Mobile no: </strong>
                    {profile.phone}{""}
                  </li>
                  <li className={`list-group-item d-flex justify-content-between align-items-center bg-${profile.role === "ADMIN" ? "info" : "white" }`}>
                    <strong className={`text-${profile.role === "ADMIN" ? "white" : "dark"}`}>Age: </strong>
                    {profile.age}
                  </li>
                  <li className={`list-group-item d-flex justify-content-between align-items-center bg-${profile.role === "ADMIN" ? "info" : "white" }`}>
                    <strong className={`text-${profile.role === "ADMIN" ? "white" : "dark"}`}>Address:</strong>
                    {profile.address}{" "}
                  </li>
                  <li
                    className={`list-group-item d-flex justify-content-between align-items-center bg-${profile.role === "ADMIN" ? "info" : "white" }`}
                    type="password"
                  >
                    <strong className={`text-${profile.role === "ADMIN" ? "white" : "dark"}`}>Password:</strong> {profile.password}{" "}
                  </li>
                  <li
                    className={`list-group-item d-flex justify-content-between align-items-center bg-${profile.role === "ADMIN" ? "info" : "white" }`}
                    type="password"
                  >
                    <strong className={`text-${profile.role === "ADMIN" ? "white" : "dark"}`}>Role:</strong> {profile.role}{" "}
                  </li>
                </ul>
              )}
              {loading && <div className="text-center">
                    <div class="spinner-grow text-primary" role="status">
                        <span class="sr-only"></span>
                    </div>
                    <div class="spinner-grow text-warning" role="status">
                        <span class="sr-only"></span>
                    </div>
                    <div class="spinner-grow text-success" role="status">
                        <span class="sr-only"></span>
                    </div>
              </div>}
              
              {displayInput && (
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Name:</strong>{" "}
                    <input
                      className="w-50"
                      type="text"
                      name="name"
                      value={editUserInput.name}
                      onChange={inputChange}
                    />
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Email: </strong>
                    <input
                      className="w-50"
                      type="text"
                      name="email"
                      value={editUserInput.email}
                      onChange={inputChange}
                    />
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Mobile no: </strong>
                    <input
                      className="w-50"
                      type="text"
                      name="phone"
                      value={editUserInput.phone}
                      onChange={inputChange}
                    />
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Age: </strong>
                    <input
                      className="w-50"
                      type="text"
                      name="age"
                      value={editUserInput.age}
                      onChange={inputChange}
                    />
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Address:</strong>
                    <textarea
                      className="w-50"
                      type="text"
                      name="address"
                      value={editUserInput.address}
                      onChange={inputChange}
                    />
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Password:</strong>
                    <input
                      className="w-50"
                      type="password"
                      name="password"
                      value={editUserInput.password}
                      onChange={inputChange}
                    />
                  </li>
                  <p className="text-center text-danger mt-3 mb-0">Edited detail may take upto 10sec to 20sec to get updated...!</p>
                </ul>
               
              )}
            </div>
            <div className="d-grid p-4 gap-2 d-md-flex justify-content-md-end">
              {displayUser && (
                <><button
                  onClick={editBtn}
                  className={`px-5 btn btn-${profile.role === "ADMIN" ? "outline-primary" : "primary"} me-md-2`}
                ><i class="bi bi-pencil-square"></i>
                  Edit
                </button>
                <button
                  onClick={LogOutBtn}
                  className={`px-5 btn btn-${profile.role === "ADMIN" ? "outline-danger" : "danger"} me-md-2`}
                ><i class="bi bi-box-arrow-left"></i>
                  Log Out
                </button>
                </>
              )}
              {displayInput && (
                <button
                  onClick={saveBtnHandler}
                  id={profile.id}
                  className={`px-5 btn btn-${profile.role === "ADMIN" ? "outline-success" : "success"} me-md-2`}
                ><i class="bi bi-door-closed-fill"></i>
                  Save
                </button>
              )}

            </div>
          </div>
            {/* <div className="container text-center">
                <p><strong>As you are Admin you can access all users data:</strong><br/><button onClick={setuserAdmin(true)} className="btn btn-outline-warning">Access data</button></p>
            </div> */}
        </div>
        
      </div>
      
    </>
  );
}
