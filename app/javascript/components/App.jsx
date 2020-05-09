import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import TraigeContainer from '../containers/TraigeContainer'
import SelectingFormValuesForm from './DemographicForm'
import {Provider} from 'react-redux'
import {connect} from 'react-redux'
import QuestionForm from './Questionnaire'
import DemographicContainer from '../containers/DemographicContainer'
import {withRouter} from 'react-router'

class App extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path ="/demographics" render={() => <DemographicContainer/>}/>
                    <Route exact path ="/questions" render={() => <QuestionForm/>}/>
                    <Route exact path ="/result" render={() => <TraigeContainer/>}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
