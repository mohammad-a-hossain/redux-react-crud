import { CREATE_CONTACT,GET_CONTACT  } from "../constants/types"

 export const addContact = (contacts)=>
    ({
      type:CREATE_CONTACT,
      payload:contacts
    })
  export const getContact = (id) => ({
    type: GET_CONTACT,
    payload:id,
  })
  
  
 