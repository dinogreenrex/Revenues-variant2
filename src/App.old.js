import React, { Component } from "react";
import { createStore } from 'redux';
import {revenuesApp} from './reducers/index';
import {connect} from 'react-redux';
import { Modal, Button, List, Card,Col, Row } from 'antd';
import 'antd/lib/modal/style/css'
import 'antd/lib/button/style/css'
import 'antd/lib/list/style/css'
import 'antd/lib/card/style/css'
import { LocalForm, Control, actions, Form } from 'react-redux-form';
import {TheForm} from './Forms/TheForm'
import Router from 'react-router-dom'


class App extends Component {
	constructor(props){
		super(props);
		this.showModalWindow = this.showModalWindow.bind(this);
		this.showModalWindowForNew = this.showModalWindowForNew.bind(this);
		this.handleOk= this.handleOk.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
	}
	componentDidMount(){
		this.props.dispatch({type: 'ADD_TODO', values : {incomeName: 'jinga', incomeValue: '123.12'}});
	}
	showModalWindow(content){
		this.props.dispatch({type: "MODAL_VISIBLE", value: true })
		this.props.dispatch({type: 'MODAL_CONTENT', content: content})
	}
	showModalWindowForNew(){
		this.props.dispatch({type: "MODAL_VISIBLE", value: true })
	}
	handleOk = (e) => {
		console.log(e);
		this.props.dispatch({type: 'MODAL_VISIBLE', value: false})
	}
	handleCancel = (e) => {
			console.log(e);
			this.props.dispatch({type: 'MODAL_VISIBLE', value: false})
	}



	render() {
		const storagious = localStorage.getItem('revenues');
		return (
			<div>
				<Row>
					<Col span={8} ></Col>
					<Col span={8} >Income</Col>
					<Col span={8}><Button onClick={this.showModalWindowForNew}>Add</Button></Col>
				</Row>
				<List
					grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
					dataSource={this.props.records}
					renderItem={item => (
						<List.Item
							onMouseOver={() => console.log(item)}
							onMouseOut={() => console.log(this)}
							>
							<Card hoverable={true} title={item.title} onClick={() => this.showModalWindow(item)}>
								{item.value}
							</Card>
						</List.Item>
					)}
				/>
				<Modal
					title="Basic Modal"
					visible={this.props.modalVisible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
					wrapClassName="vertical-center-modal"
				>
					<TheForm {...this.props.modalContent} dispatch={this.props.dispatch} />
				</Modal>
			</div>
		)


	}
}

export default connect( state => {
	return {
		modalVisible : state.income.modalVisible,
		itemActive: state.income.itemActive,
		modalContent: state.income.modalContent,
		records: state.income.records,
	}
})(App);

