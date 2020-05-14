import React,{ useEffect } from "react"
import PropTypes from "prop-types"
import TriageHeaderComponent from "../components/TriageHeader"
import {connect} from 'react-redux'
import fetchTriage from '../actions/getTriage'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router'
import Result from '../components/Result'
import { Item } from "semantic-ui-react";

class TriageContainer extends React.Component{    
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div className= "Triage"> 
                <TriageHeaderComponent/>
                <Item.Group relaxed>
                <div className="Result">
                <Result label= "Description" value= {this.props.userResult.userResult.description} />
                <Result label= "Label" value= {this.props.userResult.userResult.label} />
                </div>
                </Item.Group>
                <h1>Find A Testing Center </h1>
                 <iframe src="https://covid-19-apis.postman.com/covid-19-testing-locations/" height="500" width="100%"></iframe>
            </div>
        
        )
    }
}
function mapStateToProps(state){
    return{
        userResult: state.userResult
    };
}
const mapActionsToProps = (dispatch) => {
    return {
      fetchTriage: bindActionCreators(fetchTriage, dispatch),
    }
  }


export default withRouter(connect(mapStateToProps, mapActionsToProps)(TriageContainer));
