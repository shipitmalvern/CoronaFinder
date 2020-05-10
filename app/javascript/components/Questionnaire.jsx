import React from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import Question from "../components/Question";
import Questiontype from "../components/Questiontype";
import ReactLoading from "react-loading";

class Questionnaire extends React.Component {
  constructor(props) {
    super(props);
    this.handleTraige = this.handleTraige.bind(this);
  }
  handleTraige() {
    this.props.history.push("/result");
  }
  render() {
    //Three scenarios, single, group-single, group-multiple
    const questionsData = this.props.state.questionsData;
    if (questionsData.questions !=undefined &&  questionsData.questions.question == null) {
      this.handleTraige;
    } else {
      if (this.props.state.questionsData.questions == undefined) {
        return <ReactLoading type="balls" color="#fff" />;
      }
      if (questionsData.questions.question.type == "group_multiple") {
        return (
          <form className="form" onSubmit={this.props.handleSubmit}>
            <fieldset>
              <legend>Questions:</legend>
              <label>{questionsData.questions.question.text}</label>
              {questionsData.questions.question.items.map(function (
                question,
                i
              ) {
                return <Question question={question} index={i} />;
              })}
            </fieldset>
            <div>
              <button
                type="submit"
                disabled={this.props.pristine || this.props.submitting}
              >
                Submit
              </button>
              <button
                type="button"
                disabled={this.props.pristine || this.props.submitting}
                onClick={this.props.reset}
              >
                Clear Values
              </button>
            </div>
          </form>
        );
      } else if (questionsData.questions.question.type == "single") {
        return (
          <form className="form" onSubmit={this.props.handleSubmit}>
            <fieldset>
              <legend>Questions:</legend>
              <label>{questionsData.questions.question.text}</label>
              {questionsData.questions.question.items.map(function (
                question,
                i
              ) {
                return <Question question={question} index={i} />;
              })}
            </fieldset>
            <div>
              <button
                type="submit"
                disabled={this.props.pristine || this.props.submitting}
              >
                Submit
              </button>
              <button
                type="button"
                disabled={this.props.pristine || this.props.submitting}
                onClick={this.props.reset}
              >
                Clear Values
              </button>
            </div>
          </form>
        );
      } else {
        return (
          <form className="form" onSubmit={this.props.handleSubmit}>
            <fieldset>
              <legend>Questions:</legend>
              <label>{questionsData.questions.question.text}</label>
              <Field name="group-single" component="select">
                <option />
                {questionsData.questions.question.items.map(function (
                  question,
                  i
                ) {
                  return <Questiontype question={question} index={i} />;
                })}
              </Field>
            </fieldset>
            <div>
              <button
                type="submit"
                disabled={this.props.pristine || this.props.submitting}
              >
                Submit
              </button>
              <button
                type="button"
                disabled={this.props.pristine || this.props.submitting}
                onClick={this.props.reset}
              >
                Clear Values
              </button>
            </div>
          </form>
        );
      }
    }
  }
}

export default withRouter(
  reduxForm({
    form: "questionnaire", // a unique identifier for this form
  })(Questionnaire)
);
