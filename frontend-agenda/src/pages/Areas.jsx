import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AreaList from './../components/areas/ListAreas'


function Areas() {

    return(
    <Container>
        <Row>
            <Col xs="12">
                <AreaList>

                </AreaList>

                
            </Col>
        </Row>
    </Container>
    )
}

export default Areas