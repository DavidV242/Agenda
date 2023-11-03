import API_URL  from './../../constants/api.js'

export default function createUser(user){
    return fetch(API_URL.USER_POST,{
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
}