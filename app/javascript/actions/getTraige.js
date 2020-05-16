import axios from 'axios'
import {result} from '../actions/loadedAction'
const fetchTraigeRequest = () => {
    return {
        type: "FETCH_TRAIGE_REQUEST"
    }
}

const fetchTraigeRequestSuccess = data => {
    return {
        type: "FETCH_TRAIGE_REQUEST_SUCCESS",
        payload: data
    }
}

const fetchTraigeRequestFailure = error => {
    return {
        type: "FETCH_TRAIGE_REQUEST_SUCCESS",
        payload: error
    }
}

const fetchTraige = (state) => {
    //We can return a function
    console.log("Fetching Questions");
    const options = {
      headers: { "Content-Type": "application/json" },
    };
    var body;
      body = {
        sex: state.TraigeResponse.sex,
        age: state.TraigeResponse.age,
        evidence: state.TraigeResponse.evidence.slice(0)
      }
    return function (dispatch) {
    dispatch(fetchTraigeRequest)
      axios
        .post("/traige", body, options)
        .then((response) => {
          //successful
          let data = response.data;
          console.log(response);
          dispatch(fetchTraigeRequestSuccess(data))
          dispatch(result())
        })
        .catch((error) => {
            dispatch(fetchTraigeRequestFailure(error.message));
        });
    };
  };

export default fetchTraige
