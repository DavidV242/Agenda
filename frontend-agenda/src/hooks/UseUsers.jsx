import {useEffect, useState } from 'react'
import getAllUsers from './../services/users/getAll'

function UseUsers(){
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
     setLoading(true)
     getAllUsers()
     .then(data => {
        const {users} = data
        if (users){
            setUsers(users)
        }

     })
     .finally(()=>{
        setLoading(false)
     })
    }, [])
    return{users, loading}

}

export default UseUsers