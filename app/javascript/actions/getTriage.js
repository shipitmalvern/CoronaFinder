import axios from 'axios'
import {result} from './loadedAction'
const fetchTriageRequest = () => {
    return {
        type: "FETCH_TRIAGE_REQUEST"
    }
}

const fetchTriageRequestSuccess = data => {
    return {
        type: "FETCH_TRIAGE_REQUEST_SUCCESS",
        payload: data
    }
}

const fetchTriageRequestFailure = error => {
    return {
        type: "FETCH_TRIAGE_REQUEST_SUCCESS",
        payload: error
    }
}

const fetchTriage = (state) => {
    //We can return a function
    console.log("Fetching Questions");
    const options = {
      headers: { "Content-Type": "application/json" },
    };
    var body;
      body = {
        sex: state.TriageResponse.sex,
        age: state.TriageResponse.age,
        evidence: state.TriageResponse.evidence.slice(0)
      }
    return function (dispatch) {
    dispatch(fetchTriageRequest)
      axios
        .post("/triage", body, options)
        .then((response) => {
          //successful
          let data = response.data;
          console.log(response);
          dispatch(fetchTriageRequestSuccess(data))
          dispatch(result())
        })
        .catch((error) => {
            dispatch(fetchTriageRequestFailure(error.message));
        });
    };
  };

export default fetchTriage
