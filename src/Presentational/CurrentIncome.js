import React, {Component} from 'react'
import {List, Card ,Col, Row, Progress } from 'antd';
import 'antd/lib/modal/style/css'
import 'antd/lib/list/style/css'
import 'antd/lib/card/style/css'
import 'antd/lib/progress/style/css'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
class CurrentIncomeBase extends Component {
	componentDidMount(){
		this.props.dispatch({type: "TOTAL_INCOME"})
	}
	render() {
		return (
			<List style={{backgroundColor: 'white'}} bordered={true} header="Current Income">
				<List.Item>
					{this.props.currentIncome}
				</List.Item>
				<List.Item>
					<Progress percent={100} size="small" showInfo={false}/>
				</List.Item>
			</List>

		)
	}
}



export const CurrentIncome = connect(state =>{
	return {
		currentIncome: state.income.total
	}
})(CurrentIncomeBase);