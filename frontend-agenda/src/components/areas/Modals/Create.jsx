import React, {useState} from 'react'
import { Form, Modal, Button, Alert } from 'react-bootstrap'
import createArea from './../../../services/areas/create'


function Create({show, onClose}){
    const [showAlert, setShowAlert] = useState(false)
    const [area, setArea] = useState({
        areaCode: '', 
        areaName: '', 
        observations: '',
        status: true,
    })

    const handleClose = () => {
        onClose(area)
    }

    const handleSubmit = async () => {
        try{
            const response = await createArea(area)
            console.log(response)
            setShowAlert(true)
            window.location.reload()
            setArea({
                areaCode: '', 
                areaName: '', 
                observations: '',
                status: true,
            });
            setTimeout(() => {
                setShowAlert(false)
            }, 2500);
        } catch (error){
            console.log(error)
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target

        setArea((storedUser) => {
            return {
                ...storedUser,
                [name]: value
            }
        })
    }
    
    const handleChangeCheckBox = (event) => {
        const {name, checked} = event.target

        setArea({...area, [name]: checked})
    }

    return(
        <Modal show = {show} onHide = {handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Add new User
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>AreaCode</Form.Label>
                        <Form.Control type= "text" placeholder='Area Code' name='areaCode' onChange={handleChange}
                        value={area.areaCode}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>AreaName</Form.Label>
                        <Form.Control type= "text" placeholder='Area Name' name='areaName' onChange={handleChange}
                        value={area.areaName}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Observations</Form.Label>
                        <Form.Control type= "text" placeholder='Observations' name='observations' onChange={handleChange}
                        value={area.observations}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Check type="checkbox" name="status" label= 'Activo' onChange={handleChangeCheckBox} checked = {area.status}></Form.Check>
                    </Form.Group>
                </Form>
                {showAlert && <Alert variant='success'>
                    User Created
                    </Alert>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleSubmit}>Save Changes</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Create