import React from 'react'

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom'

import Comic from 'pages/Comic'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'

import Header from 'components/Header'

const Routes = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/:id/comic">
					<Comic />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</Router>
	)
}

export default Routes
