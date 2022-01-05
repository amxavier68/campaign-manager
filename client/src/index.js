import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// Development purposes only helper
import axios from 'axios';
window.axios = axios;

// Test Data
//
// To be run at browser console
//
// const survey = { title: 'myTitle', 
//                 subject: 'Test Email', 
//                 recipients: 'anthony-xavier@live.com', 
//                 body: 'this is a test body' 
//             };
// axios.post('/api/surveys', survey);

const store = createStore(
    reducers, 
    {},  
    applyMiddleware(reduxThunk)
);

ReactDOM.render(
    <Provider store={store}><App /></Provider>,    
    document.getElementById('root')
);