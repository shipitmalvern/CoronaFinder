import React from 'react'

const Questiontype = (props) => { 
    return (
        <option value={props.question.id}>{props.question.name}</option>
    )
  }
  export default Questiontype; 

