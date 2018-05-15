import {v4} from 'node-uuid'
export const add_revenue = (model, data) => ({
	type: `ADD_${model}`,
	id: v4(),
	data,
})
export const remove_revenue = (model, id) => ({
	type: `REMOVE_${model}`,
	id
})
export const list_revenues = (model) => ({
	type: `LIST_${model}`
})
