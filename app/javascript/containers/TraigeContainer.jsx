import React,{ useEffect } from "react"
import PropTypes from "prop-types"
import TraigeHeaderComponent from "../components/TraigeHeader"
import TraigeComponent from "../components/Traige"
import {connect} from 'react-redux'
import Button from 'terra-button'
import fetchTraige from '../actions/getTraige'
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
            <div className= "Traige"> 
                <TraigeHeaderComponent/>
                <Item.Group relaxed>
                <div className="Result">
                <Result label= "Description" value= {this.props.userResult.userResult.description} />
                <Result label= "Label" value= {this.props.userResult.userResult.label} />
                </div>
                </Item.Group>
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


export default withRouter(connect(mapStateToProps, mapActionsToProps)(TriageContainer));