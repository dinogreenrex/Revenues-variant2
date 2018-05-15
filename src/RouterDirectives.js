import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link, withRouter} from 'react-router-dom';
import {General} from './Components/General'
import {Revenues} from './Components/Revenues'
import {Col,Row} from 'antd'
import App from './App'
import {connect} from 'react-redux';
export class RouterMain extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<Router>
				<div>
					<Route
						path="/"
						component={App} />
				</div>
			</Router>
		)
	}
}

export class RoutesBase extends React.Component{
render(){

	return (
		<div>
			<Row>
			<Route exact
			       path="/General"
			       component={General}

			/>
			<Route exact
			       path="/Income"
			       render={()=> <Revenues model="income" {...this.props.income}/>}
			/>
			<Route exact
			       path="/Expenses"
			       render={()=> <Revenues model="expense"  {...this.props.expense}/>}
			/>

			</Row>
		</div>
	)
}
}
export const Routes = withRouter(connect(state => {
	return {
		expense : state.expense,
		income: state.income,
		total: state.total,
	}
})(RoutesBase));


