import React from 'react';
import {loadState} from '../localStorage'


let total =0;


export function calculateTotal(records){
	let sum = 0;
	records.map(item => {
		sum += Number(item.value);
	})
	return Number(sum).toFixed(2);
}
export const grandTotal = (state ={
	grandTotal: 0,
}, action) => {
	switch(action.type) {
		case 'TOTAL_BALLANCE':
			total = 0;
			let totalincome = Number(calculateTotal(loadState('income')));
			let totalexpenses = Number(calculateTotal(loadState('expense')));
			total = totalincome + totalexpenses;
			return Object.assign({}, state, {
				grandTotal: total.toFixed(2),
			})
		default:
			return state;
	}
}

/*********************************************
 * Income and Expenses reducers
 *
 */
let clonedRecords = 0;
let newRecord = 0;
let editedRecord = 0;
let indexOfRecord = 0;
export function revenues(model) {
	return (state = {
		modalVisible: false,
		records: loadState(`${model}`),
		total: 0,
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
			case `TOTAL`:
				total = 0;
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


