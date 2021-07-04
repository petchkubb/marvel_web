import React from 'react'

import Typography from '@material-ui/core/Typography'

import useStyles from './styles'

const Header = () => {
	const classes = useStyles()
	return (
		<div className={classes.container}>
			<Typography variant="h3" className={classes.title}>Marvel Web</Typography>
		</div>
	)
}

export default Header
