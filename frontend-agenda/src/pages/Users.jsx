import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserList from './../components/users/List'


function Users() {

    return(
    <Container>
        <Row>
            <Col xs="12">
                <UserList>

                </UserList>

                
            </Col>
        </Row>
    </Container>
    )
}

export default Users