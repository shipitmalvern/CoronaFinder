import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import TraigeContainer from '../containers/Triage'

class App extends React.Component{

    render(){
        return(
        // <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path ="/" render={() => <TraigeContainer/>}/>
                    <Route exact path ="/traige" render={() => <TraigeContainer/>}/>
                </Switch>
            </BrowserRouter>
        // </Provider>
        )
    }
}

export default App;