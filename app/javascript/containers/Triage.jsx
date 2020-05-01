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
                <TraigeComponent label = "Label "   value = {this.props.userResult.label}/>
                <TraigeComponent label = "Triage Level " value = {this.props.userResult.triage_level} />
                <TraigeComponent label = "Seriousness " value = {this.props.userResult.serious[0].common_name}/>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        userResult: state.userResult
    };
}


export default connect(mapStateToProps)(TriageContainer);