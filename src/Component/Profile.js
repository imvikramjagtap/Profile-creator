import {useState, useEffect} from 'react';
import {getUsers,deleteUser} from "../services/users"

export  function  Profile(){

    // Fetch data from server function and events

    const [user, setUser] = useState([]);
    // const [displayUser, setDisplayUser] = useState(true);
    // const [displayInput, setDisplayInput] = useState(false);
    // const [editUserInput, setEditUser] = useState({
    //     name:'',
    //     password:'',
    //     email:'',
    //     age:'',
    //     phone:'',
    //     address:'',
    //     role:'',
    // })

    function  disUser() {
        getUsers()
        .then(item => {
            setUser(item);
        });
    }
    
    useEffect(()=>{
        disUser()
    },[])

    // Delete user from page and server function and events

    const handleDelete = (e) => {
        e.preventDefault();
        deleteUser(e.target.id)
         .then(()=>{
            disUser()
         })
    }

    // Edit user from page and server function and events

    

    // const inputChange = (e) =>{
    //     setEditUser(oldValue => {
    //         return{
    //             ...oldValue,
    //             [e.target.name]: e.target.value
    //         }
    //     })
    // }

    // const editBtn = (e)=>{
    //     setEditUser(
    //         {name: user[e.target.id-1].name,
    //         password: user[e.target.id-1].password,
    //         email: user[e.target.id-1].email,
    //         age: user[e.target.id-1].age,
    //         phone: user[e.target.id-1].phone,
    //         address: user[e.target.id-1].address,
    //         role: user[e.target.id-1].role,
    //         userId: user[e.target.id-1].id
    //     })
    //     setDisplayUser(false);
    //     setDisplayInput(true);
    // };

    // const submitBtn =(e)=>{
    //     e.preventDefault();
    //     editUser(e.target.id, editUserInput);
    //     setTimeout(() => {
    //         disUser();
    //         setDisplayUser(true);
    //          setDisplayInput(false);
    //     }, 5000);
    // }



    return(
        <>
            <div className="container">
                
                    <div className='rounded align-items-center flex-wrap p-2'>
                        {user.map((users)=>( 
                            <div className={`rounded-3 shadow m-3 p-md-5 m-md-4`} key={users.id}>
                                <div className='text-center'>
                                    <h4 className='p-4'>Hello..! {users.name}</h4>
                                </div>
                                
                                <div>
                                <ul className='list-group'>
                                        <li className='list-group-item d-flex justify-content-between align-items-center'><strong>Email: </strong>{users.email}</li>                               
                                        <li className='list-group-item d-flex justify-content-between align-items-center'><strong>Mobile no: </strong>{users.phone} </li>
                                        <li className='list-group-item d-flex justify-content-between align-items-center'><strong>Age: </strong>{users.age}</li>
                                        <li className='list-group-item d-flex justify-content-between align-items-center'><strong>Address:</strong>{users.address} </li>
                                        <li className='list-group-item d-flex justify-content-between align-items-center' type="password" ><strong>Password:</strong> {users.password} </li>
                                    </ul>
                                    {/* {displayInput && <ul className='list-group'>
                                    <li className='list-group-item d-flex justify-content-between align-items-center'><strong>Name:</strong> <input className='w-50' type="text"  name="name" value={editUserInput.name} onChange={inputChange} /></li>     
                                        <li  className='list-group-item d-flex justify-content-between align-items-center'><strong>Email: </strong><input className='w-50' type="text"  name="email" value={editUserInput.email} onChange={inputChange} /></li>
                                        <li className='list-group-item d-flex justify-content-between align-items-center'><strong>Mobile no: </strong><input className='w-50' type="text"  name="phone" value={editUserInput.phone} onChange={inputChange} /></li>
                                        <li className='list-group-item d-flex justify-content-between align-items-center'><strong>Age: </strong><input className='w-50' type="text"  name="age" value={editUserInput.age} onChange={inputChange} /></li>
                                        <li className='list-group-item d-flex justify-content-between align-items-center'><strong>Address:</strong><textarea className='w-50' type="text"  name="address" value={editUserInput.address} onChange={inputChange} /></li>
                                        <li className='list-group-item d-flex justify-content-between align-items-center'><strong>Password:</strong><input className='w-50' type="password"  name="password" value={editUserInput.password} onChange={inputChange} /></li>
                                    </ul>} */}
                                </div>
                                <div className='d-grid p-4 gap-2 d-md-flex justify-content-md-end'>
                                    
                                    <button className='btn btn-primary px-5' id={users.id} onClick={handleDelete}><i class="bi bi-trash3-fill"></i>Delete user</button>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                    

                
            </div>
        </>
    );
}