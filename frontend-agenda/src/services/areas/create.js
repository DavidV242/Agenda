import API_URL  from './../../constants/api.js'

export default function createArea(area){
    return fetch(API_URL.AREA_POST,{
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(area)
    })
    .then(response => response.json())
}