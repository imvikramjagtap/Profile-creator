
export  function getUsers(){

    return fetch(`https://task1-json-server.herokuapp.com/users`)
            .then (data => data.json());
}


export function postUser(user){
    return fetch('https://task1-json-server.herokuapp.com/users',{
        method: 'POST',
        headers:{ 'Content-Type': 'application/json'},
        body: JSON.stringify(user)

    }).then(data => data.json());
}

export function deleteUser(user){
    return fetch(`https://task1-json-server.herokuapp.com/users/${user}`,{
        method:'DELETE'
    }).then(resp => resp.json());
}

export function editUser(user,item){
    return fetch(`https://task1-json-server.herokuapp.com/users/${user}`,{
        method: 'PUT',
        headers:{ 'Content-Type': 'application/json'},
        body: JSON.stringify(item)

    }).then(data => data.json());
}