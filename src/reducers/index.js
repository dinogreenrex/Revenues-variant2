import {combineReducers} from 'redux';
import {revenues} from './revenues-new'
const reducers = {
	income: revenues('income'),
	expense: revenues('expense')
}
export const reducer = combineReducers(reducers);