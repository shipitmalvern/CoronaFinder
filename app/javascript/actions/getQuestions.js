import axios from "axios";

const fetchQuestionRequest = () => {
  return {
    type: "FETCH_QUESTION_REQUEST",
  };
};

const fetchQuestionRequestSuccess = (data) => {
  return {
    type: "FETCH_QUESTION_REQUEST_SUCCESS",
    payload: data,
  };
};

const fetchQuestionRequestFailure = (error) => {
  return {
    type: "FETCH_QUESTION_REQUEST_SUCCESS",
    payload: error,
  };
};

const fetchQuestion = (state) => {
  //We can return a function
  console.log("Fetching Questions");
  const options = {
    headers: { "Content-Type": "application/json" },
  };
  var body;
  //Means first time getting questions
  if (state.demographics.sex == undefined) {
    body = {
      sex: state.form.demographic.values.sex,
      age: state.form.demographic.values.age,
      evidence: [],
    };
  } else {
    //Means other time getting questions
    body = {
      sex: state.demographics.sex,
      age: state.demographics.age,
      evidence: [],
    };
  }
  console.log(body);
  return function (dispatch) {
    dispatch(fetchQuestionRequest);
    axios
      .post("/question", body, options)
      .then((response) => {
        //successful
        let data = response.data;
        console.log(response);
        dispatch(fetchQuestionRequestSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchQuestionRequestFailure(error.message));
      });
  };
};

export default fetchQuestion;
