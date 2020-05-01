import React from "react"
import PropTypes from "prop-types"
import TraigeHeaderComponent from "../components/traige_header_component"
import TraigeComponent from "../components/traige_component"
import axios from 'axios'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
class TriageContainer extends React.Component{

    // constructor(props){
    //     super(props)
    //     this.getResult = this.getResult.bind(this);
    // }
    // getResult(){
    //     try {
    //         const response = axios.get('/traige');
    //         console.log(response);
    //       } catch (error) {
    //         console.error(error);
    //       }
    //       return response
    //     }
    
    render() {
        return(
            <div>
                <TraigeHeaderComponent/>
                <TraigeComponent label= "Description" value = {this.props.userResult.description}/>
                <TraigeComponent label = "Label "   value = "Label Value Will Go Here"/>
                <TraigeComponent label = "Triage Level " value = "Triage Value Will Go Here" />
                <TraigeComponent label = "Seriousness " value = "Seriousness Value Will Go Here"/>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        userResult: state.userResults
    };
}


export default connect(mapStateToProps)(TriageContainer);