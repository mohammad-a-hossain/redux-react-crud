import React from 'react'
import { useSelector } from 'react-redux'
import Contact from './Contact';

export default function Table() {
  const contacts = useSelector((state )=> state.contact.contacts)
  //console.log(contacts)
    return (
        <table className="container table table shadow table-light table-info table-hover">
  <thead className=" bg-teal">
    <tr >
      <th scope="col">
      <input type="checkbox" name="" value=""/>
      </th>
      <th scope="col">First Name</th>
      <th scope="col">Phone number</th>
      <th scope="col">Email address</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
      
        {contacts.map((contact) => (
          <Contact contact={contact} key={contact.id} />
        ))}
      
  
  </tbody>
</table>
    )
}
