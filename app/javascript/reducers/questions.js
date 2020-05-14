
export default function(state={}, action){
    console.log(action)
    switch(action.type){
        case "FETCH_QUESTION_REQUEST":
            return{
                ...state,
                loading:true
            }
        case "FETCH_QUESTION_REQUEST_SUCCESS":
           return {
               ...state,
               loading: false,
               questions: action.payload
           }
        case "FETCH_QUESTION_REQUEST_FAILURE":
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}
