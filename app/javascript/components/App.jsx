import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import DemographicsForm from './demographics_form'

class App extends React.Component{

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path ="/" render={() => <DemographicsForm/>}/>

                </Switch>
            </BrowserRouter>
        )
    }



} 