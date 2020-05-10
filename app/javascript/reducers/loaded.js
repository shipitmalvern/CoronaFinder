export default function(state=false, action){
    console.log(action)
    switch(action.type){
        case "LOAD":
           return true
        case "UNLOAD":
           return false
        default:
           return state
    }
}
