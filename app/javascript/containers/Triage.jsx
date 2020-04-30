import React from "react"
import PropTypes from "prop-types"
import TraigeHeaderComponent from "../components/traige_header_component"
import TraigeComponent from "../components/traige_component"

class TriageContainer extends React.Component{

    render(){
        return(
            <div>
                <TraigeHeaderComponent/>
                <header></header>
                <TraigeComponent label= "Description" value = "Description Will Go Here"/>
                <TraigeComponent label = "Label "   value = "Label Value Will Go Here"/>
                <TraigeComponent label = "Triage Level " value = "Triage Value Will Go Here" />
                <TraigeComponent label = "Seriousness " value = "Seriousness Value Will Go Here"/>
            </div>
        )
    }
}

export default TriageContainer;