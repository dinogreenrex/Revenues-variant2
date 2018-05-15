import React, {Component} from 'react'
import {List, Card ,Col, Row, Progress } from 'antd';
import 'antd/lib/modal/style/css'
import 'antd/lib/list/style/css'
import 'antd/lib/card/style/css'
import 'antd/lib/progress/style/css'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import '../css/CurrentBallance.css'
import ballanceImage from '../images/ListElement-small.png'
import ballanceImage_medium from '../images/ListElement-medium.png'
import '../App.css'

class CurrentBallanceBase extends Component {
	componentDidMount(){
			this.props.dispatch({type:'TOTAL_BALLANCE'})
	}
	render() {
		return (
			<List  header="CurrentBallance">
				<List.Item>
					<Row type="flex" justify="center" align="top">
						<div className="total-container">
						<List.Item >
							<picture>
								<source media="(min-width: 900px)" srcSet={`${ballanceImage_medium}`}/>
									<source media="(min-width: 480px)" srcSet={`${ballanceImage}`} />
										<img src={`${ballanceImage}`} alt="picturefill is working" />
							</picture>
							<img />
							<div className="text"> {this.props.totalBallance}</div>

						</List.Item>
							</div>
					</Row>
				</List.Item>
				<List.Item>
				</List.Item>
			</List>

		)
	}
}

export const CurrentBallance= connect(state =>{
	return {
		totalBallance: state.total.grandTotal,
	}
})(CurrentBallanceBase);