import React,{ useEffect } from "react"
import PropTypes from "prop-types"
import {connect} from 'react-redux'
import fetchQuestion from '../actions/getQuestions'
import {bindActionCreators} from 'redux'
import DemographicForm from '../components/DemographicForm'
import getFormValues from 'redux-form'
import {withRouter} from 'react-router'

class DemographicContainer extends React.Component{    
    constructor(props){
        super(props)
        this.handleSubmit= this.handleSubmit.bind(this)
    }

    handleSubmit(){
        console.log("Demographic Submitted!")
        this.props.history.push('/questions')
    }
    render() {
        return(
            <div> 
                <DemographicForm handleSubmit= {this.handleSubmit}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        questionData: state.form
    };
}
const mapActionsToProps = (dispatch) => {
    return {
        fetchQuestion: bindActionCreators(fetchQuestion, dispatch),
    }
  }


export default withRouter(connect(mapStateToProps, mapActionsToProps)(DemographicContainer));