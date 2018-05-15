import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom';
import {General} from './Components/General'
import {Income} from './Components/Income'
import {Expenses} from './Components/Expenses'
import {Col,Row} from 'antd'
import App from './App'

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

export class Routes extends React.Component{
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
			       render={()=> <Income model="income"/>}
			/>
			<Route exact
			       path="/Expenses"
			       render={()=> <Expenses model="expense"/>}
			/>

			</Row>
		</div>
	)
}

}

