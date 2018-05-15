import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Card,Row,Col,List} from 'antd'
import 'antd/lib/card/style/css'
import 'antd/lib/list/style/css'
import 'antd/lib/row/style/css'
import 'antd/lib/col/style/css'
import {CurrentBallance} from '../Presentational/CurrentBallance'
import {CurrentIncome} from '../Presentational/CurrentIncome'
import {CurrentExpenses} from  '../Presentational/CurrentExpenses'
import {LastMonthStatus} from  '../Presentational/LastMonthStatus'
import PropTypes from 'prop-types'

class GeneralBase extends React.Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		this.props.dispatch({type:"TOTAL_BALLANCE"})
	}

	render(){
		const bgImage = '../images/ListElement.png'
		return(
			<div style={{ background: '#ECECEC', padding: '30px' }}>

				<List>
						<List>
							<List.Item><CurrentBallance /></List.Item>
						</List>

					<List grid={{gutter: 8, xs: 2, sm: 2, md: 2, lg: 2, xl: 2, xxl: 2}}>
						<List.Item>
									<CurrentIncome model=""/>
							</List.Item>
						<List.Item>
								<CurrentExpenses />
						</List.Item>
					</List>
					<List grid={{gutter: 32, xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1}}>
						<LastMonthStatus />
					</List>
				</List>

			</div>

		)
	}
}


export const General = connect()(GeneralBase);