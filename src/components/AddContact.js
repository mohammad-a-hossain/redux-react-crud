import React from 'react'
import { Form,Button } from 'react-bootstrap'


const AddContact = () => {
    return (
        <div className='container'>
         <Form className='col-md-6'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Contact Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
          <Form.Label>Contact Eamil</Form.Label>
          <Form.Control type="email" placeholder="enter email" />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contact Phone</Form.Label>
          <Form.Control type="number" placeholder="enter phone" />
        </Form.Group>
      
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> 
        </div>
      
    )
}
export default AddContact