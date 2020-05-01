import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import TraigeContainer from '../containers/Triage'
import DemographicsForm from './demographics_form'
import {Provider} from 'react-redux'


class App extends React.Component{

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path ="/demographics" render={() => <DemographicsForm/>}/>
                    <Route exact path ="/Result" render={() => <TraigeContainer/>}/>
                </Switch>
            </BrowserRouter>
        )
    }
}



export default App;
