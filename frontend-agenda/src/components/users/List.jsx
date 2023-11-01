import React from 'react'
import { Spinner, Table } from 'react-bootstrap' 
import UseUsers from '../../hooks/UseUsers'

function List(){
    const {users, loading} = UseUsers()

    if (loading) return <Spinner/>
        return(
            <Table>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    {users.map(({id, name, email, status})=> (
                        <tr key={` user-row-${id}`}>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{status}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        );
}

export default List