import React from 'react'

import { Box, Typography } from '@material-ui/core'
import api from 'Api'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import useStyles from './styled'

const Detail = () => {
	const classes = useStyles()

	const { id } = useParams<{ id: string }>()

	const { isLoading, error, data } = useQuery('detailCharacter', async () => {
		const res = await api('GET', `/characters/${id}/comics`)
		return res.data.data
	})

	if(isLoading) {
		(
			<div>Fetching...</div>
		)
	}
	console.log(data)

	const { name, thumbnail, urls } = data?.results[0] ?? {}
	// console.log(data?.results[0])

	return (
		<Box
			margin={4}
		>
			{data?.results?.map((item:any, index:number) => {
				return (
					<div key={index}>
						<div>{item?.title}</div>
						<img
							className={classes.image}
							src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
							alt={item?.title}
						/>
					</div>
				)
			})}
		</Box>
	)
}

export default Detail
