import React from 'react'
import getQuestions from '../actions/getQuestions'
import {withRouter} from 'react-router'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'

class DemographicForm extends React.Component{
  constructor(props){
      super(props)
  }

render(){
  return (
    <form className= "form" onSubmit={this.props.handleSubmit}>
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
        <button type="submit" disabled={this.props.pristine || this.props.submitting}>
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

export default withRouter(reduxForm({
  form: 'demographic' // a unique identifier for this form
})(DemographicForm));
