
export default function(state={}, action){
    console.log(action)
    switch(action.type){
        case "FETCH_TRIAGE_REQUEST":
            return{
                ...state,
                loading:true
            }
        case "FETCH_TRIAGE_REQUEST_SUCCESS":
           return {
               ...state,
               loading: false,
               userResult: action.payload
           }
        case "FETCH_TRIAGE_REQUEST_FAILURE":
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}
