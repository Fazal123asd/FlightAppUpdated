import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import inFlightsReducer from './store/reducers/InFlights'
import passengerDataReducer from './store/reducers/passengerData'
import thunk from 'redux-thunk'
import authReducer from './store/reducers/Auth'

const rootReducer = combineReducers({
    inFlights: inFlightsReducer,
    passengerData: passengerDataReducer,
    auth: authReducer
})
// const logger = store =>{
//     return next =>{
//         return action =>{
//             console.log('[Middleware] dispatching', action);
//             const result = next(action);
//             console.log('[Middleware] next state', store.getState())
//             return result
//         }
//     }
// }
const store = createStore(rootReducer, applyMiddleware( thunk))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
