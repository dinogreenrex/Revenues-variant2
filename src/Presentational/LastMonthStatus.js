import React, {Component} from 'react'
import {List, Card ,Col, Row, Progress } from 'antd';
import 'antd/lib/modal/style/css'
import 'antd/lib/list/style/css'
import 'antd/lib/card/style/css'
import 'antd/lib/progress/style/css'
import {connect} from 'react-redux'

class LastMonthStatusBase extends Component {
	componentDidMount(){

	}
	render() {
		return (
			<List style={{backgroundColor: 'white'}} bordered={true} header="Last Month Status">
				<List.Item>

				</List.Item>
			</List>

		)
	}
}

export const LastMonthStatus = connect()(LastMonthStatusBase);