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

const fetchQuestion = (dispatch) => {
   //We can return a function 
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
