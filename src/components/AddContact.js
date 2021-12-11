import React from 'react'
import { Form,Button } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from './../store/index';
import  shortid from 'shortid';
import { useHistory } from 'react-router-dom';


const AddContact = () => {
 // const [value, setValue] = useState('')

 const dispatch = useDispatch()
 let history =useHistory()

  const [name, setName]  = useState('')
  const [email, setEmail]  = useState('')
  const [phone, setPhone]  = useState('')

 

  const submitForm = e=>{
    e.preventDefault()
    const new_contact = {
      id:shortid.generate(),
      name:name,
      email:email,
      phone:phone
    }
    //console.log(name,phone,email)
    dispatch(addContact(new_contact))
    history.push('/components/Table')
  }

    return (
        <div className='container'>
         <Form className='col-md-6' onSubmit={submitForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Contact Name</Form.Label>
          <Form.Control type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Enter name" />
          <Form.Label>Contact Eamil</Form.Label>
          <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="enter email" />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contact Phone</Form.Label>
          <Form.Control type="number"onChange={(e)=>setPhone(e.target.value)} value={phone} placeholder="enter phone" />
        </Form.Group>
      
        <Button variant="primary" type="submit">
          create contact
        </Button>
      </Form> 
        </div>
      
    )
}
export default AddContact