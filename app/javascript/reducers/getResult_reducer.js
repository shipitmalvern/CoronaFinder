
import axios from 'axios';
import dispatch from 'redux'
import receive from '../actions/receive'

const initialState = {
    TriageResponse: {},
    userResult: {}
}


export default function(state=initialState, action){
    console.log(action)
    switch(action.type){
        case "MAKE_TRAIGE_CALL":
            console.log("Reached Reducer to update Triage Component")
            //Goes to traige controller, which makes call to api, also need to pass in triage body that is formed 
            //Get response back, and update store with that
            var data;
            var response = axios.get('/traige')
                .then((response) => {
                console.log(response.data);
                dispatch(()=>receive(response.data));
                data = response.data;
             });
             console.log(data);
             return state
        case "RECEIVE_RESPONSE":
            console.log("Reached Reducer to get Triage Response")
            return action.data;
        default:
            console.log("Reached Reducer")
            return(
                state
            )
    }
}
