import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";

let initialState = 0;

function CounterState(state = initialState,action){

  if(action.type === "INCREMENT"){

    return initialState = initialState + 1
  }
  if(action.type === "DICREMENT"){

    return initialState = initialState - 1
  }
  return state
}

const store = createStore(CounterState);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
