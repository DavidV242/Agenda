import API_URL from './../../constants/api'

export default function getAllUsers(){
    return fetch(API_URL.USER_GET).then((response)=> response.json())
}