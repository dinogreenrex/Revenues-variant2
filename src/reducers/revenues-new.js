import React from 'react';
import _ from 'lodash';
import {loadState} from '../localStorage'


function calculateTotal(records){
	let sum = 0;
	records.map(item => {
		sum += Number(item.value);
	})
	return Number(sum).toFixed(2);
}

/*********************************************
 * Income and Expenses reducers
 *
 */
let clonedRecords = 0;
let newRecord = 0;
let editedRecord = 0;
let indexOfRecord = 0;
let total = 0;
export function revenues(model) {
	return (state = {
		modalVisible: false,
		records: loadState(`${model}`),
		totalIncome: 0,
		totalExpenses: 0,
	}, action) => {
		switch (action.type) {
			case `ADD_${model}`:
				newRecord= action.record;
				//Need to get the last record id from store
				clonedRecords = state.records.slice();
				clonedRecords.push(newRecord);
				return Object.assign({}, state, {
					records: clonedRecords,
				})
			case `DELETE_${model}`: //delete income from store. //action.id
				clonedRecords = null;
				clonedRecords = state.records.slice();
				indexOfRecord = action.id;
				clonedRecords.splice(indexOfRecord, 1)
				return Object.assign({}, state, {
					records: clonedRecords
				})
			case `EDIT_${model}`: //find record in storage
				clonedRecords = null;
				editedRecord = action.content; //edit
				clonedRecords = state.records.slice();
				indexOfRecord = clonedRecords.findIndex(item => item.id === editedRecord.id);
				clonedRecords.splice(indexOfRecord, 1, editedRecord)
				return Object.assign({}, state, {
					records: clonedRecords
				})
			case 'MODAL_VISIBLE':
				return Object.assign({}, state, {
					modalVisible: action.value,
				})
			case 'MODAL_CONTENT':
				return Object.assign({}, state, {
					modalContent: action.content,
				})
			case `TOTAL_${model}`:
				clonedRecords = state.records.slice();
				total = calculateTotal(clonedRecords)
				return Object.assign({}, state, {
					total: total,
				})
			default:
				return state;
		}
	}
};


