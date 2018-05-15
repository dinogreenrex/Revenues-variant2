import React, {Component} from 'react'
import { Modal, Button, List, Card,Col, Row } from 'antd';
import 'antd/lib/modal/style/css'
import 'antd/lib/button/style/css'
import 'antd/lib/list/style/css'
import 'antd/lib/card/style/css'
import {TheForm} from '../Forms/TheForm'
import {connect} from 'react-redux'

export class RevenuesBase extends React.Component {
	constructor(props) {
		super(props);
		this.showModalWindow = this.showModalWindow.bind(this);
		this.onCancel = this.onCancel.bind(this);
	}

	showModalWindow(content = null) {
		this.props.dispatch({type: "MODAL_VISIBLE", value: true})
		content ? this.props.dispatch({type: 'MODAL_CONTENT', content: content, editInAction: true}) : null
	}

	onCancel = (e) => {
		this.props.dispatch({type: 'MODAL_VISIBLE', value: false})
		const form = this.formRef.props.form;
		form.resetFields();
	}

	/***************/

	handleCreate = () => {
		const form = this.formRef.props.form;
		form.validateFields((err, values) => {
			if (err) {
				return;
			}
			let formData = {
				id: this.props.id,
				name: values.name,
				value: values.value,
				model: this.props.model
			}
			this.props.dispatch({type: `ADD_${this.props.model}`, record: formData})
			form.resetFields();
			this.props.dispatch({type: 'MODAL_VISIBLE', value: false})
		});
	}

	handleUpdate = () => {
		const form = this.formRef.props.form;
		let formData = 0;
		form.validateFields((err, values) => {
			if (err) {
				return;
			}
			formData = {
				id: this.props.modalContent.id, //find id of record
				name: values.name,
				value: values.value,
				model: this.props.model
			}
		})
		this.props.dispatch({type: `EDIT_${this.props.model}`, content: formData});
		form.resetFields();
		this.props.dispatch({type: 'MODAL_VISIBLE', value: false})
	}

	handleDelete = () => {
		const form = this.formRef.props.form;

		this.props.dispatch({type: `DELETE_${this.props.model}`, id: this.props.modalContent.id})
		form.resetFields();
		this.props.dispatch({type: 'MODAL_VISIBLE', value: false})
	}
	/************************
	 *
	 * @param formRef
	 */
	saveFormRef = (formRef) => {
		this.formRef = formRef;
	}
	render(){
		return(
			<div>
				<Button type="primary" onClick={this.showModalWindow}>Add</Button>
				<Row type="flex" justify="space-around" align="middle" >
					<List
						style={{width: '100%', padding: '10px'}}
						dataSource={this.props.records}
						renderItem={item => (
							<Card hoverable={true}>
								<List.Item onClick={()=>this.showModalWindow(item)}>
									<Col span={12}> {item.name} </Col> <Col span={12}> {Number(item.value).toFixed(2)}</Col>
								</List.Item>
							</Card>
						)}
					/>
				</Row>
				<TheForm
					wrappedComponentRef={this.saveFormRef}
					visible={this.props.modalVisible}
					onCancel={this.onCancel}
					onCreate={this.handleCreate}
					onUpdate={this.handleUpdate}
					onDelete={this.handleDelete}
					{...this.props.modalContent}
				/>

			</div>
		)
	}
}

export const Revenues = connect()(RevenuesBase)