import React,{ useEffect } from "react"
import PropTypes from "prop-types"
import {connect} from 'react-redux'
import fetchQuestion from '../actions/getQuestions'
import {bindActionCreators} from 'redux'
import DemographicForm from '../components/DemographicForm'
import {withRouter} from 'react-router'
import getQuestions  from '../actions/getQuestions'
import {saveDemoData} from '../actions/makeTraigeResponse'
import News from '../components/News'
import getNews from '../actions/getNews'
import { Item } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'


class DemographicContainer extends React.Component{    
    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.state ={
            loaded: null
        }
    }
    componentWillMount(){
        this.props.getNews(this.props.state)
    }
    componentDidUpdate(){
        if(this.props.state.loaded =="news" && this.state.loaded==null){
            this.setState({loaded: "news"})
        }
    }
    handleSubmit(){
        console.log("Demographic Submitted!")
        this.props.getQuestions(this.props.state)
        this.props.saveDemoData(this.props.state)
        this.props.history.push('/questions')
    }
    render() {
        if(this.state.loaded!=null){
            return(
                <div>
                <div> 
                    <DemographicForm handleSubmit= {this.handleSubmit}/>
                </div>

                <div className="News">
                <h1>COVID 19 LATEST NEWS</h1>
                    <Item.Group relaxed>
                    {this.props.state.News.News.map(function (article,i) {
                    return <News urlToImage={article.urlToImage} title={article.title} description={article.description} url={article.url} />
                  })}
                    </Item.Group>
                </div>
                </div>
            )
        }else{
            return(
                 <DemographicForm handleSubmit= {this.handleSubmit}/>
            )
        }
    }

}


function mapStateToProps(state){
    return{
        state: state,
        loaded: state.loaded
    };
}

const mapActionsToProps = ( dispatch) => {
    return {
        getQuestions: bindActionCreators(getQuestions, dispatch),
        saveDemoData: bindActionCreators(saveDemoData, dispatch),
        getNews: bindActionCreators(getNews, dispatch)
    }
  }


export default withRouter(connect(mapStateToProps, mapActionsToProps)(DemographicContainer));