import React, {useState} from 'react'
import { Form, Modal, Button, Alert } from 'react-bootstrap'
import createUser from './../../../services/users/create'

function Create({show, onClose}){
    const [showAlert, setShowAlert] = useState(false)
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        status: true,
    })

    const handleClose = () => {
        onClose(user)
    }

    const handleSubmit = async () => {
        try{
            const response = await createUser(user)
            console.log(response)
            setShowAlert(true)
            setUser({
                name: '',
            email: '',
            password: '',
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

        setUser((storedUser) => {
            return {
                ...storedUser,
                [name]: value
            }
        })
    }
    
    const handleChangeCheckBox = (event) => {
        const {name, checked} = event.target

        setUser({...user, [name]: checked})
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
                        <Form.Label>Name</Form.Label>
                        <Form.Control type= "text" placeholder='User name' name='name' onChange={handleChange}
                        value={user.name}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type= "email" placeholder='user@email.com' name='email' onChange={handleChange}
                        value={user.email}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type= "password" placeholder='Password User' name='password' onChange={handleChange}
                        value={user.password}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Check type="checkbox" name="status" label= 'Activo' onChange={handleChangeCheckBox} checked = {user.status}></Form.Check>
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