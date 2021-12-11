import React from 'react'
import Avatar from 'react-avatar'

export default function Contact({contact}) {
    const {name, phone, email} = contact
    return (
        
        <tr >
        <th scope="row">
        <input type="checkbox" name="" value=""/>
        </th>
        <td><Avatar name={name} size='35' round={true}/> { name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>
        <a href='##'>
        <span className="material-icons"style={{fontSize:'15px',color:'green'}}>edit</span>
        </a>
        <a href='##'>
        <span className="material-icons"  style={{fontSize:'18px',color:'red'}}>remove</span>
        </a>
        </td>
      </tr>
        
    )
}
