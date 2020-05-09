import React from 'react'
import { Field, reduxForm } from "redux-form";

const Question = (props) => { 

    return (
        <div key={props.index}>
            <label>{props.question.name}</label>
            <div>
              <label>
                <Field
                  name={props.question.id}
                  component="input"
                  type="radio"
                  value="present"
                />{' '}
                Yes
              </label>
              <label>
                <Field
                  name={props.question.id}
                  component="input"
                  type="radio"
                  value="absent"
                />{' '}
                No
              </label>
            </div>
        </div>
    )
  }
  export default Question; 

