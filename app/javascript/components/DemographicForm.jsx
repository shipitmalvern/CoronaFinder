import React from 'react'
import {withRouter} from 'react-router'
import { Field, reduxForm} from 'redux-form'
import { Header } from 'semantic-ui-react'

class DemographicForm extends React.Component{
  constructor(props){
      super(props)
  }

render(){
  return (
    <form className= "form" onSubmit={this.props.handleSubmit}>
    
    <Header as='h1' dividing>
      Covid19 Questionnaire
  </Header>
    <fieldset>
    <legend>Please Enter Your Details:</legend>
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
          &nbsp;&nbsp;
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
        <br></br>
        <div>
          <Field
              name="age"
              component="input"
              type="number"
              value="21"
            />  
        </div>
      </div>
      <br></br>
      <div>
        <button type="submit" disabled={this.props.pristine || this.props.submitting}>
          Submit
        </button>
        &nbsp;&nbsp;
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
