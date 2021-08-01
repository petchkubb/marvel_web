import { red, yellow } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
	container: {
		background: red[500],
	},
	title: {
		cursor: 'pointer',
		width: '15vw',
		color: yellow[500],
	}
})

export default useStyles
