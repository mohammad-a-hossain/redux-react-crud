import { CREATE_CONTACT,GET_CONTACT  } from "../constants/types"

 export const addContact = (contact)=>
    ({
      type:CREATE_CONTACT,
      payload:contact
    })
  export const getContact = (id) => ({
    type: GET_CONTACT,
    payload:id,
  })
  
  
 