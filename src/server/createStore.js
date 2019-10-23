import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../shared/Reducers/index';

export default () => {
    const store = createStore(reducers, {} , applyMiddleware(thunk));
    return store;
}