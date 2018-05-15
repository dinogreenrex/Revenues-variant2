import {combineReducers} from 'redux';
import {revenues, grandTotal} from './revenues-new'
const reducers = {
	income: revenues('income'),
	expense: revenues('expense'),
	total: grandTotal
}
export const reducer = combineReducers(reducers);