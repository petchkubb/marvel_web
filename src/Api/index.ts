import axios, { Method } from 'axios'

const apiConfig = (method: Method, path: string, params?:Record<string, any>) => {
	return axios.request({
		method,
		baseURL: `http://gateway.marvel.com/v1/public${path}`,
		params: {
			apikey: process.env.REACT_APP_API_KEY,
			hash: process.env.REACT_APP_HASH,
			ts: process.env.REACT_APP_TIMESTAMP,
			...params
		}
	})
}

export default apiConfig
