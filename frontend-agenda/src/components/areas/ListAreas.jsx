import React from 'react'
import { Spinner, Table } from 'react-bootstrap' 
import UseAreas from '../../hooks/UseAreas';

function List(){
    const {areas, loading} = UseAreas()

    if (loading) return <Spinner/>
        return(
            <Table striped bordered hover>
                <thead>
                    <th>AreaCode</th>
                    <th>AreaName</th>
                    <th>Observations</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    {areas.map(({id, areaCode, areaName, observations, status})=> (
                        <tr key={` user-row-${id}`}>
                    <td>{areaCode}</td>
                    <td>{areaName}</td>
                    <td>{observations}</td>
                    <td>{status ? 'Active': 'Inactive'}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        );
}

export default List