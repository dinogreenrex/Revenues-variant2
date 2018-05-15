import React from 'react';
import _ from 'lodash';

let currentBallance = 0;
let totalExpenses = 0;
let totalIncome = 0;
export const totalBallance =  (state = {
	totalBallance: 0,
}, action) => {

	switch(action.type) {
		case 'TOTAL_BALLANCE':
			totalIncome = Number(JSON.parse(localStorage.getItem(`income_total`))),
			totalExpenses = Number(JSON.parse(localStorage.getItem(`expenses_total`))),
			currentBallance = Number(totalIncome - totalExpenses).toFixed(2);
			return Object.assign({}, state, {
				totalBallance: currentBallance
			})
		default:
			return state;
	}
}

/*********************************************
 * Income and Expenses reducers
 *
 */
let total = 0;
let newRecord = 0;
let newRecordId = 0;
let editedRecord = 0;
let clonedRecords = 0;
let indexOfEditedRecord = 0;
let expensesRecords = 0;
let incomeRecords = 0;
let sum = 0;
function returnTotal(records){
	sum = 0;
	records.map(item => {
		sum += Number(item.value);
	})
	return Number(sum).toFixed(2);
}
//records = JSON.parse(localStorage.getItem(`${model}_records`))

function returnLastRecordId(records = 0){
	if(_.isEmpty(records)){
		return 0;
	}else {
		let LastItem = records.pop();
		return LastItem.id;
	}
}

export function revenues(model ) {
	return (state = {
	modalVisible: false,
	lastRecordId: returnLastRecordId(JSON.parse(localStorage.getItem(`${model}_records`))),
	itemActive: false,
	records: JSON.parse(localStorage.getItem(`${model}_records`)),
	totalIncome: 0,
	totalExpenses: 0,
}, action) => {
		switch (action.type) {
			case `ADD_${model}`:
				newRecordId = state.lastRecordId + 1;
				newRecord = { id: newRecordId, name: action.formData.name, value: Number(action.formData.value).toFixed(2), model: action.formData.model}
				//Need to get the last record id from store
				clonedRecords= state.records.slice()
				clonedRecords.push(newRecord)
				localStorage.setItem(`${model}_records`, JSON.stringify(clonedRecords))
				return Object.assign({}, state, {
					records: JSON.parse(localStorage.getItem(`${model}_records`)),
					lastRecordId: newRecordId,
				})
			case `DELETE_${model}`: //delete income from store. //action.id
				clonedRecords = null;
				clonedRecords = state.records.slice();
				indexOfEditedRecord = clonedRecords.findIndex(item => item.id === action.id);
				clonedRecords.splice(indexOfEditedRecord, 1)
				localStorage.setItem(`${model}_records`, JSON.stringify(clonedRecords))
				return Object.assign({}, state, {
					records: clonedRecords
				})
			case `EDIT_${model}`: //find record in storage
				clonedRecords = null;
				editedRecord = action.content; //edit
				clonedRecords = state.records.slice();
				indexOfEditedRecord = clonedRecords.findIndex(item => item.id === editedRecord.id);
				clonedRecords.splice(indexOfEditedRecord, 1, editedRecord)
				localStorage.setItem(`${model}_records`, JSON.stringify(clonedRecords))
				return Object.assign({}, state, {
					records: clonedRecords
				})
			case 'MODAL_VISIBLE':
				return Object.assign({}, state, {
					modalVisible: action.value,
				})
			case 'SELECTED_INCOME_ID':
				total =0;
				clonedRecords = 0;
				clonedRecords = state.records.slice();
				total = returnTotal(clonedRecords)
				return Object.assign({}, state, {
					selectedRecordId: action.id,
				})
			case 'MODAL_CONTENT':
				return Object.assign({}, state, {
					modalContent: action.content,
				})
			case 'TOTAL_INCOME':
				clonedRecords = 0;
				clonedRecords = state.records.slice();
				total = returnTotal(clonedRecords);
				localStorage.setItem(`${model}_total`, total);
				return Object.assign({}, state, {
					totalIncome: Number(total).toFixed(2),
				})
			case 'TOTAL_EXPENSES':
				total =0;
				clonedRecords = 0;
				clonedRecords = state.records.slice();
				total = returnTotal(clonedRecords)
				localStorage.setItem(`${model}_total`, total);
				return Object.assign({}, state, {
					totalExpenses: Number(total).toFixed(2),
				})
			default:
				return state;
		}
	}
};


