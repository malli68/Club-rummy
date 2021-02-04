import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import LoginReducers from '../src/components/redux/reducers/LoginReducers'
 import reducers from './components/redux/reducers/index'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));


export default store;