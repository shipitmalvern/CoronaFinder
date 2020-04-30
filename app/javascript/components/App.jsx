import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import TraigeContainer from '../containers/Triage'
import DemographicsForm from './demographics_form'

class App extends React.Component{

    render(){
        return(
        //  <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path ="/" render={() => <DemographicsForm/>}/>
                    <Route exact path ="/traige" render={() => <TraigeContainer/>}/>
                </Switch>
            </BrowserRouter>
        //  </Provider>
        )
    }
}

export default App;
