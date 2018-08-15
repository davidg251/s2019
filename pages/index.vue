<template>
  <section>
		<!--<Home/>-->
		<ArtistList/>
	</section>
</template>

<script>
	import Home from '~/components/Home.vue'
	import ArtistList from '~/components/ArtistsList.vue'

	export default {
		components: {
			Home,
			ArtistList
		}
	}
</script>

<style>
</style>
