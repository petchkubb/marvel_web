import React from 'react'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { QueryClient, QueryClientProvider } from 'react-query'
import Routes from 'routes'

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
					<Routes />
				</div>
			</ThemeProvider>
		</QueryClientProvider>
	)
}

export default App
