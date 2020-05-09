
const initialState = {
    evidence: []
}

export default function(state=initialState, action){
    console.log(action)
    switch(action.type){
        case "UPDATE_DEMOGRAPHICS":
            return{
                ...state,
                sex: action.state.form.demographic.values.sex,
                age: action.state.form.demographic.values.age
            }
        case "UPDATE_SYMPTOMS":
            var symptoms= action.state.form.questionnaire.values
            var evid = action.state.TraigeResponse.evidence.slice(0)
            console.log(evid)
            for (let [key, value] of Object.entries(symptoms)) {
                evid.push({"id":key, "choice_id":value})
             }
            return {
                ...state,
                evidence: evid
             }
        default:
            return state
    }
}
