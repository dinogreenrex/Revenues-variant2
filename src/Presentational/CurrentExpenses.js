import React, {Component} from 'react'
import {List, Card ,Col, Row, Progress } from 'antd';
import 'antd/lib/modal/style/css'
import 'antd/lib/list/style/css'
import 'antd/lib/card/style/css'
import 'antd/lib/progress/style/css'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class CurrentExpensesBase extends Component {
	componentDidMount(){
		this.props.dispatch({type: "TOTAL_EXPENSES"})
	}
	render() {
		return (
			<List style={{backgroundColor: 'white'}} bordered={true} header="Current Expenses">
				<List.Item>
					{this.props.currentExpenses}
				</List.Item>
				<List.Item>
					<Progress percent={100} size="small" showInfo={false} status="exception"/>
				</List.Item>
			</List>

		)
	}
}

/*CurrentExpensesBase.propTypes = {
	currentExpenses: PropTypes.string,
}*/
export const CurrentExpenses = connect(state =>{
	return {
		currentExpenses: state.expense.total,
	}
})(CurrentExpensesBase);