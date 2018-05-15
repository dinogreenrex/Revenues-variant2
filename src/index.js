import ReactDOM from 'react-dom';
import React, { Component } from "react";
import {store} from './storeConfig'

import App from './App'
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux'
import {RouterMain} from './RouterDirectives'



ReactDOM.render(
	<Provider store={store}>
		<RouterMain />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
