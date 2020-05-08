import React,{ useEffect } from "react"
import PropTypes from "prop-types"
import TraigeHeaderComponent from "../components/traige_header_component"
import TraigeComponent from "../components/traige_component"
import {connect} from 'react-redux'
import Button from 'terra-button'
import fetchTraige from '../actions/getTraige'
import {bindActionCreators} from 'redux'

class TriageContainer extends React.Component{    
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div> 
                <TraigeHeaderComponent/>
                <TraigeComponent label= "Description" value = {this.props.userResult.userResult.description}/>
                <TraigeComponent label = "Label "   value = {this.props.userResult.userResult.label}/>
                <TraigeComponent label = "Triage Level " value = {this.props.userResult.userResult.triage_level} />
                {/* <TraigeComponent label = "Seriousness " value = {this.props.userResult.userResult.serious[0].common_name}/> */}
                <Button text="Submit" type="submit" onClick={this.props.fetchTraige} />
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
const mapActionsToProps = (dispatch) => {
    return {
      fetchTraige: bindActionCreators(fetchTraige, dispatch),
    }
  }


export default connect(mapStateToProps, mapActionsToProps)(TriageContainer);