import React from 'react'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import './App.css'
import Header from './components/Header'

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
			</div>
		</ThemeProvider>
	)
}

export default App
