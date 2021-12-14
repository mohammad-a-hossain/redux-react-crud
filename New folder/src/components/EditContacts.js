import React from 'react'
import { Form,Button } from 'react-bootstrap'
import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getContact } from './../actions/contactAction';
import { useParams } from 'react-router-dom';



const EditContacts = () => {
      let {id} =useParams()
     const dispatch = useDispatch()

     const editcontact = useSelector((state) => state.contact.editcontact)

  //alert(id)
 const [name, setName]  = useState('')
 const [email, setEmail]  = useState('')
 const [phone, setPhone]  = useState('')

 // const [value, setValue] = useState('')
 useEffect(() => {
   if(editcontact != null){
     setName(editcontact.name)
     setEmail(editcontact.email)
     setPhone(editcontact.phone)
   }
  dispatch(getContact(id))
// eslint-disable-next-line react-hooks/exhaustive-deps
},[dispatch]);

 //let history =useHistory()
 //const contact = useSelector((state) => state.contact.contact);
 

       return (
        <div className='container'>
         <Form className='col-md-6' >
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
          upload contact
        </Button>
      </Form> 
        </div>
      
    )
}
export default EditContacts