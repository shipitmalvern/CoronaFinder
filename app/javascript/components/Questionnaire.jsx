import React from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import Question from "../components/Question";
import ReactLoading from 'react-loading';

class Questionnaire extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.state.questionsData.loading == true) {
      const styles ={
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        background: "rgb(53, 126, 221)"
      }
      return <div style={styles}><ReactLoading type="bubbles" color="#fff" height="70%" width="70%"/> </div>
    } else {
      //Three scenarios, single, group-single, group-multiple
      const questionsData = this.props.state.questionsData;

      if (questionsData.should_stop == true) {
        this.props.history.push("/traige");
      } else {
        if (this.props.state.questionsData.questions == undefined) {
          return <ReactLoading type="balls" color="#fff"/>;
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
