import React from 'react'

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom'

import Detail from 'pages/Detail'
import Home from 'pages/Home'
  
const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/:id/detail">
					<Detail />
				</Route>
			</Switch>
		</Router>
	)
}

export default Routes
