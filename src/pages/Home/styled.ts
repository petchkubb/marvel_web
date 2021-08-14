import { makeStyles } from '@material-ui/core/styles'

const applyPaper = {
	cursor: 'pointer',
	'&:hover': {
		transform: 'translateY(-10px)'
	},
	transition: 'ease-in 0.2s',
	margin: '8px',
	border: '8px solid black',
}

const useStyles = makeStyles({
	container: {
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
	},
	image: {
		objectFit: 'cover',
		width: '100%',
		height: '100%',
	},
	panel1: {
		...applyPaper,
		gridColumn: 'span 4',
	},
	panel2: {
		...applyPaper,
		gridColumn: 'span 8'
	}
})

export default useStyles
