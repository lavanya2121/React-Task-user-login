// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'
// import configureStore from './store/configureStore'
// import { Provider } from 'react-redux'
// import {startSetAll} from './actions/userAction'

// const store = configureStore()

// store.subscribe(() => {
//     console.log(store.getState())
// })
// console.log(store.getState())
// // store.dispatch(startSetAll())




// const jsx = (
//     <Provider store={store}>
//         <App />
//     </Provider>
// )

// ReactDOM.render(jsx,document.getElementById('root'))

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
