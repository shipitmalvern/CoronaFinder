import axios from 'axios'

const fetchQuestionRequest = () => {
    return {
        type: "FETCH_QUESTION_REQUEST"
    }
}

const fetchQuestionRequestSuccess = data => {
    return {
        type: "FETCH_QUESTION_REQUEST_SUCCESS",
        payload: data
    }
}

const fetchQuestionRequestFailure = error => {
    return {
        type: "FETCH_QUESTION_REQUEST_SUCCESS",
        payload: error
    }
}

const fetchQuestion = (state) => {
   //We can return a function 
   console.log("Fetching Questions")
   const body = {
       sex: state.form.demographics.values.sex,
       age: state.form.demographics.values.age,
       evidences: []
   }
    return function(dispatch) {
        dispatch(fetchQuestionRequest)
        axios.get('/question')
            .then(response=> {
                //successful
                const data = response.data
                console.log(response)
                dispatch(fetchQuestionRequestSuccess(data))
            })
            .catch(error => {
                dispatch(fetchQuestionRequestFailure(error.message))
            })
    }
}

export default fetchQuestion
