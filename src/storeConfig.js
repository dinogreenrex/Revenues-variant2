import {reducer} from "./reducers/index";
import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose} from 'redux';
import {saveState, loadState} from './localStorage';
import throttle from 'lodash/throttle'


const logger = store => next => action => {
	console.log('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	return result;
}



const mymiddleware = applyMiddleware(
	thunk,
	logger,
);

export const store = createStore(
	reducer,
	compose(
		mymiddleware,
		window.devToolsExtension ? window.devToolsExtension() : f => f),

);
store.subscribe(throttle(() => {
	saveState('income', store.getState().income.records)
}, 1000));
store.subscribe(throttle(() => {
	saveState('expense', store.getState().expense.records)
}, 1000));
store.subscribe(throttle(() => {
	saveState('total', Number(store.getState().total.grandTotal))
}, 1000));




