import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import TriageContainer from '../containers/Triage'
import QuestionnaireContainer from '../containers/Questionnaire'
import DemographicContainer from '../containers/Demographics'
import {withRouter} from 'react-router'
import Loading from '../components/Loading'
class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path ="/" render={() => <DemographicContainer/>}/>
                    <Route exact path ="/questions" render={() => <QuestionnaireContainer/>}/>
                    <Route exact path ="/loading" render={() => <Loading/>}/>
                    <Route exact path ="/result" render={() => <TriageContainer/>}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
