import React from 'react'

import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router-dom'

import useStyles from './styles'

const Header = () => {
	const classes = useStyles()
	const { push } = useHistory()

	const goToHomePage = () => push('/')
	return (
		<div className={classes.container}>
			<div onClick={goToHomePage}>
				<Typography variant="h3" className={classes.title}>Marvel Web</Typography>
			</div>
		</div>
	)
}

export default Header
