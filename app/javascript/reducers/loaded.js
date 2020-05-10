export default function(state=false, action){
    console.log(action)
    switch(action.type){
        case "LOAD":
           return true
        case "UNLOAD":
           return false
         case "TRAIGE":
            return "traige"
        default:
           return state
    }
}
