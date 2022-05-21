import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { postUser } from "../services/users";

export default function Signup(props) {
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [alert, setAlert] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    password: "",
    email: "",
    age: "",
    phone: "",
    address: "",
    role: "",
  });

  const handleChange = (e) => {
    setNewUser((presValue) => {
      if (e.target.type === "number"){
        return {
          ...presValue,
          [e.target.name]: parseInt(e.target.value),
        };
      } else {
        return {
          ...presValue,
          [e.target.name]: e.target.value,
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(newUser.name === ""){
        setErr(true);
        setErrMsg("Name");
    }else if(newUser.email === ""){
        setErr(true);
        setErrMsg("Email");
    }else if(newUser.password === ""){
        setErr(true);
        setErrMsg("Password");
    }else if(newUser.age === ""){
        setErr(true);
        setErrMsg("age");
    }else if(newUser.phone === ""){
        setErr(true);
        setErrMsg("Mobile no");
    }else if(newUser.address === ""){
        setErr(true);
        setErrMsg("Address");
    }else if(newUser.role === ""){
        setErr(true);
        setErrMsg("Role");
    }else{
        postUser(newUser).then(() => {
            setNewUser({
              name: "",
              password: "",
              email: "",
              age: "",
              phone: "",
              address: "",
              role: "",
            });
          });
          setAlert(true);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        };

    }
   

  return (
    <>
      <div className="container m-auto text-center">
        <div className="p-4">
          <form className="bg-light m-auto p-2 rounded-3 shadow w-md-50">
            <h2 className="">Sign up </h2>
            <div className="row p-4 g-4 ">
              <div className="col-12 col-md-6">
                <input
                  className="border-0 rounded p-2 w-100"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  className="border-0 rounded p-2 w-100"
                  type="email"
                  name="email"
                  value={newUser.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  className="border-0 rounded p-2 w-100"
                  type="password"
                  name="password"
                  value={newUser.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  className="border-0 rounded p-2 w-100"
                  type="number"
                  name="age"
                  value={newUser.age}
                  onChange={handleChange}
                  placeholder="Age"
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  className="border-0 rounded p-2 w-100"
                  type="tel"
                  name="phone"
                  value={newUser.phone}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  required
                />
              </div>

              <div className="col-12">
                <textarea
                  className="border-0 rounded p-2 w-100"
                  type="text"
                  name="address"
                  value={newUser.address}
                  onChange={handleChange}
                  placeholder="Address"
                />
              </div>
              <div className="col-12 text-start">
                <p>Role:</p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="role"
                    value="GUEST"
                    onChange={handleChange}
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    GUEST
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="role"
                    value="ADMIN"
                    onChange={handleChange}
                    id="flexRadioDefault2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    ADMIN
                  </label>
                </div>
                <div class="mb-3 text-center">
                  <p>
                    <strong>
                      Already have have an account..? 
                       <Link to="/">LogIn now</Link>
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            {alert && (
              <p className="text-success">
                Account created taking you to sign in page..!
              </p>
            )}
            {err && <p className="text-danger">Please enter {errMsg}</p>}
            <button
              onClick={handleSubmit}
              className="btn btn-primary px-5 text-white mt-0 mb-2 mt-0"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
