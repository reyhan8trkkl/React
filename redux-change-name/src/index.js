import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,compose,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import axios from 'axios';
import promise from 'redux-promise-middleware'


const allEnhancers = compose(
  applyMiddleware(thunk,promise,logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//createStore(Reducer , InitialData , Extension)
const myStore = createStore(rootReducer,
  {
  productReducer:[{name:'Sony',type:'Mp3 Player'}],
  myReducer:'First Text'},
  allEnhancers
  );//Create your store

myStore.dispatch({
  type:"CUSTOMTYPE",
  payload: axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(r=>r.data)
})

myStore.dispatch({
  type:"USER",
  payload: axios.get('https://jsonplaceholder.typicode.com/users')
  .then(r=>r.data)
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
