import React from 'react'
import { Field, reduxForm } from 'redux-form'
import PropTypes from "prop-types"
import {withRouter} from 'react-router'

class Questionnaire extends React.Component{
    constructor(props){
        super(props)
    }

render(){
  return (
    <form className= "form" onSubmit={this.props.handleSubmit}>
    <fieldset>
    <legend>Questions:</legend>
      <div>
        <label>Sex</label>
        <div>
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
        <button type="submit" onClick={this.props.fetchQuestions} disabled={this.props.pristine || this.props.submitting}>
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
  form: 'questionnaire' // a unique identifier for this form
})(Questionnaire))