import React, { Component } from "react";
/*import { createStore } from 'redux';
import {revenuesApp} from './reducers/index';
import {connect} from 'react-redux';*/
import {Col, Row } from 'antd';
/*
import 'antd/lib/modal/style/css'
import 'antd/lib/button/style/css'
import 'antd/lib/list/style/css'
import 'antd/lib/card/style/css'
import { LocalForm, Control, actions, Form } from 'react-redux-form';
import {TheForm} from './Forms/TheForm'*/
import {Link} from 'react-router-dom';
import {Routes} from './RouterDirectives'


class App extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className="navigation" style={{padding: '10px'}}>

				<Row type="flex" align="bottom">
					<Col span={8}><p style={{textAlign: 'left'}}><Link to="/Income">Income</Link></p></Col>
					<Col span={8}><p style={{textAlign: 'center'}}><Link to="/General">General</Link></p></Col>
					<Col span={8}><p style={{textAlign: 'right'}}> <Link to="/Expenses">Expenses</Link></p></Col>
				</Row>
				<Routes />
			</div>
		)


	}
}

export default App;

