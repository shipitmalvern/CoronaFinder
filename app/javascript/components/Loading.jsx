import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import ReactLoading from 'react-loading'

class Loading extends React.Component{    
    constructor(props){
        super(props);
    }
    componentWillUpdate(){
        if(this.props.state.questionsData.loading==false){
            this.props.history.push('/questions')
        }
        
    }
    render() {
            return(
                <div className="Loading" ><ReactLoading type="bubbles" color="#fff" height="70%" width="70%"/> </div>
            )
    }
}
function mapStateToProps(state){
    return{
        state: state
    };
}
export default withRouter(connect(mapStateToProps)(Loading));

  