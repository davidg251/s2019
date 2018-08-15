import axios from 'axios'

const conf = {
	API_ENDPOINT: 'https://sancocho-fest.firebaseio.com'
}

const Api = {
	doGet(url) {
		return axios.get(`${conf.API_ENDPOINT}/${url}.json`)
	}
}

export default Api;
