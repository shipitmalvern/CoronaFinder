import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import ReactLoading from 'react-loading'
import {unload} from '../actions/loadedAction'
import {bindActionCreators} from 'redux'

class Loading extends React.Component{    
    constructor(props){
        super(props);
        this.state= {
            loaded: this.props.loaded
        }
        // this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }
    componentDidUpdate(){
        if(this.props.loaded == true){
                this.props.history.push('/questions')
        }else if(this.props.loaded == "traige"){
            this.props.history.push('/result')
        }
    }

    render() {
        this.state.loaded= this.props.loaded
        if(this.props.loaded == false){
            return(
                <div className="Loading" ><ReactLoading type="bubbles" color="#fff" height="70%" width="70%"/> </div>
            )
        }else{
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
        loaded: state.loaded
    };
}
export default withRouter(connect(mapStateToProps, mapActionsToProps)(Loading));

  