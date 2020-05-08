import React from 'react'
import { Field, reduxForm } from 'redux-form'
import getQuestions from '../actions/getQuestions'

class SimpleForm extends React.Component{
  constructor(props){
      super(props)
      this.handleSubmitForm = this.handleSubmitForm.bind(this)
  }

  handleSubmitForm(){
    console.log("Demographic Form Submitted")
  }
render(){
  return (
    <form className= "form" onSubmit={this.handleSubmitForm}>
    <fieldset>
    <legend>Demographics:</legend>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field
              name="sex"
              component="input"
              type="radio"
              value="male"
            />{' '}
            Male
          </label>
          <label>
            <Field
              name="sex"
              component="input"
              type="radio"
              value="female"
            />{' '}
            Female
          </label>
        </div>
      </div>
      <div>
        <label>Age</label>
        <div>
          <Field
              name="age"
              component="input"
              type="number"
              value="21"
            />  
        </div>
      </div>
      <div>
        <button type="submit" onClick={()=> dispatch(getQuestions)} disabled={this.props.pristine || this.props.submitting}>
          Submit
        </button>
        <button type="button" disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset}>
          Clear Values
        </button>
      </div>
    </fieldset>
    </form>
  )
}
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm);
