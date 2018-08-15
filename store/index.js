import Vuex from 'vuex'
import Api from '../api/index'

const state = {
	activeArtistId: 0,
	artists: []
}

const actions = {
	loadArtists: ({ commit }) => {
		Api.doGet('artists')
			.then((response) => {
				commit('setArtists', response.data)
			})
	}
}

const mutations = {
	changueArtist: (state, idArtist) => {
		state.activeArtistId = idArtist
	},
	setArtists: (state, artists) => {
		state.artists = artists
	}
}

const getters = {
	AllArtists: state => {
		return state.artists.map(x => x)
	},

	AllEditions: state => {
		return state.editions.map(x => x)
	},

	ActiveArtistId: state => {
		return state.activeArtistId
	},

	ActiveArtist: state => {
		return state.lineUp.filter(obj => obj.id === state.activeArtistId)[0]
	}

}

const createStore = () => {
	return new Vuex.Store({
		state,
		getters,
		actions,
		mutations
	})
}

export default createStore
