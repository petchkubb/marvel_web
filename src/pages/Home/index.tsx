import React from 'react'

import api from 'Api'
import InfiniteScroll from 'react-infinite-scroller'
import { useInfiniteQuery } from 'react-query'

const Home = () => {
	const {
		status,
		data,
		hasNextPage,
		fetchNextPage,
	} = useInfiniteQuery('characters', async ({ pageParam = 0 }) => {
		const res = await api('GET', '/characters', { limit: 100, offset: pageParam })
		return res
	}, {
		getNextPageParam: lastPage => lastPage?.data?.data?.offset + 100
	})

	const loadMore = () => fetchNextPage()

	return (
		<div>
			{data?.pages?.map((page, index) => (
				<InfiniteScroll
					key={index}
					loadMore={loadMore}
					hasMore={hasNextPage}
					loader={<h4 key={0}>Loading...</h4>}
				>
					{
						page.data?.data?.results.map((item: any) => (
							<div key={item?.id}>
								<div>{item?.name}</div>
								<img width="100px" height="100px" src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`} alt="" />
							</div>
						))
					}
				</InfiniteScroll>
			))}
		</div>
	)
}

export default Home
