
export default function(state={}, action){
    switch(action.type){
        case "SAVE_DEMOGRAPHICS":
            if(action.state != null){
                return action.state.form.demographic.values; 
            }
            return state
        default:
            return state
    }
   
}
