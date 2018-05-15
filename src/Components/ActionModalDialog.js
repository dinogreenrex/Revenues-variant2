import React, {Component} from 'react'
import { Modal, Button, List, Card,Col, Row } from 'antd';
import 'antd/lib/modal/style/css'
import 'antd/lib/button/style/css'
import 'antd/lib/list/style/css'
import 'antd/lib/card/style/css'
import {Link, Route} from 'react-router-dom'
import {connect} from 'react-redux'

class ActionModalDialog extends Component {
	constructor(props){
		super(props) // receive model as props
		this.editRecord = this.editRecord.bind(this);
		this.deleteRecord = this.deleteRecord.bind(this);
	}
	componentDidMount(){
		console.log(this.props);
	}
	editRecord(id){
		this.props.dispatch({type:`EDIT_${this.props.model}`})
		console.log(id)
	}
	deleteRecord(id){
		this.props.dispatch({type: `DELETE_${this.props.model}` }) //pass id of record taken from selection onClick dispatched to action creator and stored in reducer as selectedRecordId
		console.log(id)
	}


	onCancel = (e) => {
		console.log(e);
		this.props.dispatch({type: 'MODAL_VISIBLE', value: false})
	}

	/***************/

	onCreate = () => {
		const form = this.formRef.props.form;
		form.validateFields((err, values) => {
			if (err) {
				return;
			}
			this.props.dispatch({type: 'MODAL_VISIBLE', value: false})
		});
	}

	render(){
		const { visible, onCancel, onCreate } = this.props;
		return (
			<Modal
				visible={visible}
				title="Choose an action"
				okText="Create"
				onCancel={onCancel}
				onOk={onCreate}
				destroyOnClose={true}
			>

			</Modal>
		)
	}
}
export const ActionModal = connect()(ActionModalDialog);