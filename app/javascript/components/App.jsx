import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import TraigeContainer from '../containers/Triage'
import DemographicsForm from './demographics_form'
import {Provider} from 'react-redux'
import {connect} from 'react-redux'


class App extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path ="/demographic" render={() => <DemographicsForm/>}/>
                    <Route exact path ="/result" render={() => <TraigeContainer/>}/>
                </Switch>
            </BrowserRouter>
        )
    }
}


export default App;
