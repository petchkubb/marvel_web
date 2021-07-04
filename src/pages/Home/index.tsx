import React from 'react'

import api from 'Api'
import { async } from 'q'
import { useQuery } from 'react-query'

const Home = () => {
	const { isLoading, error, data } = useQuery('characters', async() => {
		const res = await api('GET', '/characters', { limit: 100, offset: 0 })
		return res
	})

	console.log(data)
    
	return (
		<div>
        Home
		</div>
	)
}

export default Home
