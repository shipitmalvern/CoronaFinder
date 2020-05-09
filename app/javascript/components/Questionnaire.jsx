import React from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import Question from "../components/Question";
import Loading from "../components/Loading";

class Questionnaire extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.state.questionsData.loading == true) {
      return <Loading />;
    } else {
      //Three scenarios, single, group-single, group-multiple
      const questionsData = this.props.state.questionsData;

      if (questionsData.should_stop == true) {
        this.props.history.push("/traige");
      } else {
        if (questionsData.questions == undefined) {
          return (
            <form className="form" onSubmit={this.props.handleSubmit}>
              <fieldset>
                <legend>Questions:</legend>
              </fieldset>
            </form>
          );
        }
        return (
          <form className="form" onSubmit={this.props.handleSubmit}>
            <fieldset>
              <legend>Questions:</legend>
              {console.log(questionsData.questions.question.items)}
              {questionsData.questions.question.items.map(function (
                question,
                i
              ) {
                return <Question question={question} index={i} />;
              })}
            </fieldset>
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
