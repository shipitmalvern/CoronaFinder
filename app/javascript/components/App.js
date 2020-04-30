import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import TraigeComponent from './traige_component'
import DemographicsForm from './demographics_form'

class App extends React.Component{

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path ="/" render={() => <DemographicsForm/>}/>
                    <Route exact path ="/traige" render={() => <TraigeComponent/>}/>
                </Switch>
            </BrowserRouter>
        )
    }



}