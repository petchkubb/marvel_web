import { red, yellow } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
	container: {
		cursor: 'pointer',
		'&:hover': {
			transform: 'translateY(-10px)'
		},
		transition: 'ease-in 0.2s',
	},
	image: {
		objectFit: 'cover',
		width: '100%',
		height: '100%',
		borderRadius: '8px'
	},
	paper: {
		padding: '12px'
	}
})

export default useStyles
