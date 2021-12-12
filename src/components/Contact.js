import React from 'react'
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom';

export default function Contact({contact}) {
    const {name, phone, email, id} = contact
    return (
        
        <tr >
        <th scope="row">
        <input type="checkbox" name="" value=""/>
        </th>
        <td><Avatar name={name} size='35' round={true}/> { name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>
        <Link to={`/components/EditContacts/:${id}`}>
        <span className="material-icons"style={{fontSize:'15px',color:'green'}}>edit</span>
        </Link>
        <Link href='##'>
        <span className="material-icons"  style={{fontSize:'18px',color:'red'}}>remove</span>
        </Link>
        </td>
      </tr>
        
    )
}
