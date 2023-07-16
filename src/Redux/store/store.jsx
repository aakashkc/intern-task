import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducer/reducer';
// import { rootSaga } from '../saga/saga';
import { composeWithDevTools } from 'redux-devtools-extension'
import {rootSaga} from '../saga/saga'

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store with the root reducer and middleware
const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
