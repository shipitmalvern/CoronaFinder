import {combineReducers} from 'redux'
import UserResultReducer from './triageResult'
import questionsData from './questions'
import TriageResponseReducer from './triageResponse'
import loaded from './loaded'
import { reducer as formReducer } from 'redux-form'
import News from './news'

const allReducers = combineReducers({
    userResult: UserResultReducer,
    TriageResponse: TriageResponseReducer,
    questionsData: questionsData,
    loaded: loaded,
    News: News,
    form: formReducer
})

export default allReducers;