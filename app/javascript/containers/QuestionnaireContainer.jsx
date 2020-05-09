import React,{ useEffect } from "react"
import PropTypes from "prop-types"
import {connect} from 'react-redux'
import fetchQuestion from '../actions/getQuestions'
import {bindActionCreators} from 'redux'
import Questionnaire from "../components/Questionnaire"
import {withRouter} from 'react-router'
import {formValueSelector } from 'redux-form'
import getQuestions from '../actions/getQuestions'

class QuestionnaireContainer extends React.Component{    
    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleSubmit(){
        console.log("Questions Submitted!")
        this.props.getQuestions(this.props.state)
        this.props.history.push('/result')
        
    }
    render() {
        return(
            <div> 
            <Questionnaire handleSubmit= {this.handleSubmit}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        state: state
    };
}

const mapActionsToProps = ( dispatch) => {
    return {
        getQuestions: bindActionCreators(getQuestions, dispatch)
    }
  }


export default withRouter(connect(mapStateToProps, mapActionsToProps)(QuestionnaireContainer));