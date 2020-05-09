import React from 'react'
import { Field, reduxForm } from "redux-form";

const Questiontype = (props) => { 
    return (
        <option value={props.question.id}>{props.question.name}</option>
    )
  }
  export default Questiontype; 

