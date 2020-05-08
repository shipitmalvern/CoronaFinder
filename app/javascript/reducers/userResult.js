
const initialState = {
    loading: false,
    TriageResponse: {},
    userResult: {
        "description": "Your answers do not suggest that you have the COVID-19. However, your symptoms are worrisome and require medical consultation.",
        "label": "Call a doctor",
        "serious": [],
        "triage_level": "call_doctor"
    }
}

export default function(state=initialState, action){
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
