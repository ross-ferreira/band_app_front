import { createStore, applyMiddleware, compose } from "redux";
import initial from '../data/initial';
import reducer from '../reducer/reducer'; 
import thunk from "redux-thunk";
    
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export default createStore(
      reducer, 
      initial,
      composeEnhancers(applyMiddleware(thunk))
      );
