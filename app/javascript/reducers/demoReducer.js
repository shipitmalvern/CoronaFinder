export default function(state={}, action){
    console.log(action)
    switch(action.type){
        case "UPDATE_DEMOGRAPHIC":
           return {
               country: action.payload.country,
               state: action.payload.state,
           }
        default:
           return state
    }
}