import React from 'react'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import Home from 'pages/Home'

import Header from 'components/Header'

import './App.css'

const theme = createMuiTheme({
	typography: {
		fontFamily: [
			'SFArchRivalRegular',
		].join(','),
	},
})

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Header />
				<Home />
			</div>
		</ThemeProvider>
	)
}

export default App
