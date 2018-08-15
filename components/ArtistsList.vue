<template>
	<div>
		Artists
		<Loader/>
		 <div v-for="artist in AllArtists" :key="artist.id">
		 		{{artist.id}}
		 	</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { Loader } from './Loader.vue'

	export default {
		components: {
			Loader
		},
		created: function() {
			this.loadArtists();
		},
		methods: {
			...mapActions([
				'loadArtists'
			])
		},
		computed: {
			...mapGetters([
				'AllArtists'
			])
		}
	}
</script>
