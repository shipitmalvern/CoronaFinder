
export default function(state=[], action){
    console.log(action)
    switch(action.type){
        case "FETCH_NEWS_REQUEST":
            return{
                ...state,
                loading:true
            }
        case "FETCH_NEWS_REQUEST_SUCCESS":
           return {
               ...state,
               loading: false,
               News: action.payload
           }
        case "FETCH_NEWS_REQUEST_FAILURE":
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}
