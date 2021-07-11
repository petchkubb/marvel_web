import React from 'react'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { QueryClient, QueryClientProvider } from 'react-query'

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
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				refetchOnReconnect: false,
				retry: false,
			}
		}
	})
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<div className="App">
					<Header />
					<Home />
				</div>
			</ThemeProvider>
		</QueryClientProvider>
	)
}

export default App
