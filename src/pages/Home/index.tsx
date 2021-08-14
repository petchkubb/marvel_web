import React, { useEffect } from 'react'

import { Grid } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import api from 'Api'
import { useInfiniteQuery } from 'react-query'
import { useHistory } from 'react-router-dom'

import useStyles from 'pages/Home/styled'

const Home = () => {
	const { push } = useHistory()

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

	const classes = useStyles()

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

	const goToDetailPage = (item:any) => {
		push(`${item?.id}/comic`)
	}

	const contentClassName = (index:number) => {
		const newIndex = index + 1
		let className = classes.panel1
		if(newIndex % 5 === 0) {
			className = classes.panel2
		}
		return className
	}

	return (
		<div className={classes.container}>
			{data?.pages?.map((page, index) => (
				page.data?.data?.results.map((item: any, index: number) => (
					<div
						key={item?.id}
						className={contentClassName(index)}
						onClick={() => goToDetailPage(item)}
					>
						{/* <div>{item?.name}</div> */}
						<img
							className={classes.image}
							src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
							alt={item?.name}
						/>
					</div>
				))
			))}
			<div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
		</div>
	)
}

export default Home
