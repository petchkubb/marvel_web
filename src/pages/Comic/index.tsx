import React from 'react'

import { Box, Container, Grid, Typography } from '@material-ui/core'
import api from 'Api'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import useStyles from './styled'

const Detail = () => {
	const classes = useStyles()

	const { id } = useParams<{ id: string }>()

	const { isLoading: charLoading, data: charData } = useQuery('character', async () => {
		const res = await api('GET', `/characters/${id}`)
		return res.data.data
	})
	const { isLoading, data } = useQuery('comics', async () => {
		const res = await api('GET', `/characters/${id}/comics`)
		return res.data.data
	})

	if(isLoading || charLoading) {
		(
			<div>Fetching...</div>
		)
	}

	return (
		<>
			<Box
				margin={4}
				flexDirection="row"
				display="flex"
			>
				<img
					className={classes.charImage}
					src={`${charData?.results[0]?.thumbnail?.path}.${charData?.results[0]?.thumbnail?.extension}`}
					alt={charData?.results[0]?.name}
				/>
				<Box>
					<Typography paragraph variant="h4">{charData?.results[0]?.name}</Typography>
					<Typography>{charData?.results[0]?.description}</Typography>
				</Box>
			</Box>
			<Grid
				container
				spacing={3}
				style={{
					margin: 0,
					width: '100%',
					justifyContent: 'center'
				}}
			>
				{data?.results?.map((item:any, index:number) => {
					return (
						<Grid
							key={index}
							item
							xs={3}
							className={classes.container}
						>
							<Box display="flex" flexDirection="column" alignItems="center">
								<Typography className={classes.titleComic}>{item?.title}</Typography>
								<img
									className={classes.image}
									src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
									alt={item?.title}
								/>
							</Box>
						</Grid>
					)
				})}
			</Grid>
		</>
	)
}

export default Detail
