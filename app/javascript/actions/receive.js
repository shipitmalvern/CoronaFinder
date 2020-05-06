export default function(data) {
    console.log("Reached Traige Action Call")
    return {type:"RECEIVE_RESPONSE", data: data} 
}