import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
	container: {
		cursor: 'pointer',
		'&:hover': {
			transform: 'translateY(-10px)'
		},
		transition: 'ease-in 0.2s',
		margin: '16px',
	},
	image: {
		objectFit: 'cover',
		width: '25vw',
		height: '25vh',
		borderRadius: '8px',
		marginTop: '16px'
	},
	charImage: {
		objectFit: 'cover',
		width: '45vw',
		height: '45vh',
		borderRadius: '8px',
		marginRight: '16px'
	},
	titleComic: {
		lineHeight: '1.5em',
		height: '3em',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		width: '100%',
	}
})

export default useStyles
