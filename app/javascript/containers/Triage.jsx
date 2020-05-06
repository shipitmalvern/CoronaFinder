import React from "react"
import PropTypes from "prop-types"
import TraigeHeaderComponent from "../components/traige_header_component"
import TraigeComponent from "../components/traige_component"
import axios from 'axios'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Button from 'terra-button'
import getTraige from '../actions/index'

class TriageContainer extends React.Component{    

    render() {
        return(
            <div> 
                <TraigeHeaderComponent/>
                <TraigeComponent label= "Description" value = {this.props.userResult.description}/>
                <TraigeComponent label = "Label "   value = {this.props.userResult.label}/>
                <TraigeComponent label = "Triage Level " value = {this.props.userResult.triage_level} />
                {/* <TraigeComponent label = "Seriousness " value = {this.props.userResult.serious[0].common_name}/> */}
                <Button text="Submit" type="submit" onClick={() => this.props.getTraige()} />
            </div>
        )
    }
}
//Grabs user result state and maps to this component, will need questionnaire component to make api call and update traige result
function mapStateToProps(state){
    return{
        userResult: state.userResult
    };
}

//Needed for actions/reducers
const mapDispatchToProps = { getTraige };

export default connect(mapStateToProps, mapDispatchToProps)(TriageContainer);