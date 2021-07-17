import React, { useEffect } from 'react'

import { Grid } from '@material-ui/core'
import api from 'Api'
import { useInfiniteQuery } from 'react-query'

const Home = () => {
	const {
		status,
		data,
		hasNextPage,
		fetchNextPage,
		isFetching,
		isFetchingNextPage
	} = useInfiniteQuery('characters', async ({ pageParam = 0 }) => {
		const res = await api('GET', '/characters', { limit: 100, offset: pageParam })
		return res
	}, {
		getNextPageParam: lastPage => lastPage?.data?.data?.offset === 1500 ? undefined : lastPage?.data?.data?.offset + 100
	})

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	function handleScroll() {
		if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
			fetchNextPage()
		}
	}

	if(status === 'loading') {
		(
			<p>Loading...</p>
		)
	}
	if(status === 'error') {
		(
			<p>Error!</p>
		)
	}
	return (
		<Grid
			container
			spacing={3}
			style={{
				margin: 0,
				width: '100%',
			}}
		>
			{data?.pages?.map((page, index) => (
				page.data?.data?.results.map((item: any) => (
					<Grid key={item?.id} item xs={3}>
						<div>{item?.name}</div>
						<img width="100px" height="100px" src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`} alt="" />
					</Grid>
				))
			))}
			<div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
		</Grid>

	)
}

export default Home
