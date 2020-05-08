import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import TraigeContainer from '../containers/Triage'
import SelectingFormValuesForm from './demo_form'
import {Provider} from 'react-redux'
import {connect} from 'react-redux'
import QuestionForm from './questionaire'


class App extends React.Component{

    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(){
        //Make action call for 

    }
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path ="/demographics" render={() => <SelectingFormValuesForm handleSubmit= {this.handleSubmit}/>}/>
                    <Route exact path ="/questions" render={() => <QuestionForm handleSubmit= {this.handleSubmit}/>}/>
                    <Route exact path ="/result" render={() => <TraigeContainer/>}/>
                </Switch>
            </BrowserRouter>
        )
    }
}


export default App;
