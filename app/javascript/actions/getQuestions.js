import axios from "axios";
import {load} from '../actions/loadedAction'

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
  if (state.TraigeResponse.sex == undefined) {
    body = {
      sex: state.form.demographic.values.sex,
      age: state.form.demographic.values.age,
      evidence: [],
    };
  } else {
    //Means other time getting questions
    body = {
      sex: state.TraigeResponse.sex,
      age: state.TraigeResponse.age,
      evidence: state.TraigeResponse.evidence.slice(0)
    }
    //Push in current answers 
    for (let [key, value] of Object.entries(state.form.questionnaire.values)) {
      if(key == "group-single"){
        body.evidence.push({"id":value, "choice_id":"present"})
        console.log(body.evidence)
      }else{
        body.evidence.push({"id":key, "choice_id":value})
      }
   }
  }
  return function (dispatch) {
    dispatch(fetchQuestionRequest);
    axios
      .post("/question", body, options)
      .then((response) => {
        //successful
        let data = response.data;
        console.log(response);
        dispatch(fetchQuestionRequestSuccess(data));
        if(response.data.should_stop==false){
          dispatch(load())
        }
        
      })
      .catch((error) => {
        dispatch(fetchQuestionRequestFailure(error.message));
      });
  };
};

export default fetchQuestion;
