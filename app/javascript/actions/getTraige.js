import axios from 'axios'

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

const fetchTraige = (dispatch) => {
   //We can return a function 
    return function(dispatch) {
        dispatch(fetchTraigeRequest)
        axios.get('/traige')
            .then(response=> {
                //successful
                const data = response.data
                console.log(response)
                dispatch(fetchTraigeRequestSuccess(data))
            })
            .catch(error => {
                dispatch(fetchTraigeRequestFailure(error.message))
            })
    }
}

export default fetchTraige
