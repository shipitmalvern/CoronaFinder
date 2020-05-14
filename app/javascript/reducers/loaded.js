export default function(state=false, action){
    console.log(action)
    switch(action.type){
        case "LOAD":
           return true
        case "UNLOAD":
           return false
         case "TRIAGE":
            return "triage"
         case "RESULT":
            return "result"
         case "NEWS":
            return "news"
        default:
           return state
    }
}
