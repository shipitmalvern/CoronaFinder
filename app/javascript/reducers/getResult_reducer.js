

export default function(action){

    console.log(action)
    switch(action.type){
        case "MAKE_TRAIGE_CALL":
            console.log("Reached Reducer to Make Traige Call")
            //Goes to traige controller, which makes call to api, also need to pass in triage body that is formed 
            //Get response back, and update store with that
            return "hello"
        default:
            console.log("Reached Reducer")
            return(
                {
                    "NotWORkingdescription": "Your symptoms currently do not suggest that you have COVID-19. However, according to the WHO and CDC guidelines, it is strongly recommended that you keep yourself separated from others for the next 14 days.",
                    "label": "Quarantine",
                    "serious": [
                        {
                            "common_name": "Living or caring for COVID-19 suspected person",
                            "id": "p_12",
                            "is_emergency": false,
                            "name": "Living or caring for COVID-19 suspected person"
                        }
                    ],
                    "triage_level": "quarantine"
                }
            )
    }
}
