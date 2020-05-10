import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import ReactLoading from 'react-loading'
import {unload} from '../actions/loadedAction'
import {bindActionCreators} from 'redux'

class Loading extends React.Component{    
    constructor(props){
        super(props);
        this.handleNext = this.handleNext.bind(this)

    }
    handleNext(){
            console.log("Here ")
            console.log(this.props.state)
            this.props.unload()
            this.props.history.push('/questions')
    }
    render() {
            if(this.props.state.loaded =! true){
                return(
                    <div className="Loading" ><ReactLoading type="bubbles" color="#fff" height="70%" width="70%"/> </div>
                )
            }
            else{
                this.handleNext()
                return(
                    <div className="Loading" ><ReactLoading type="bubbles" color="#fff" height="70%" width="70%"/> </div>
                )
            }
            
    }
}
const mapActionsToProps = (dispatch) => {
    return {
        unload: bindActionCreators(unload, dispatch)
    }
  }
  
function mapStateToProps(state){
    return{
        state: state
    };
}
export default withRouter(connect(mapActionsToProps, mapStateToProps)(Loading));

  