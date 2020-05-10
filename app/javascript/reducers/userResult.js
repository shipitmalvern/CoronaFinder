
export default function(state={}, action){
    console.log(action)
    switch(action.type){
        case "FETCH_TRAIGE_REQUEST":
            return{
                ...state,
                loading:true
            }
        case "FETCH_TRAIGE_REQUEST_SUCCESS":
           return {
               ...state,
               loading: false,
               userResult: action.payload
           }
        case "FETCH_TRAIGE_REQUEST_FAILURE":
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}
