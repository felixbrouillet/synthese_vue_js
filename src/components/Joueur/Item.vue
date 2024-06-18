<template>
	<div class="component">
		<router-link :to="{ name: 'joueur.index' }">
			<button class="return-button">Retour</button>
		</router-link>
		<template v-if="selectedJoueur">
			<div v-for="(value, key) in filteredJoueur" :key="key" class="joueur-details">
				<!-- <p v-if="key === 'image'" class="joueur-image">
					<img :src="getImagePath(value)" alt="Joueur Image" />
				</p> -->
				<img :src="`/img/joueur/${joueur.id}/512x512.webp`" :alt="`${joueur.prenom} ${joueur.nom}`" />
				<p class="joueur-property">
					<span class="property-name">{{ key }}:</span> {{ value }}
				</p>
			</div>
		</template>
		<p v-else class="loading-message">Loading...</p>
		<!-- Handle errors here -->
	</div>
</template>
  
<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const props = defineProps({
	id: {
		type: [Number, String],
		required: true,
	},
})

const selectedJoueur = ref(null)
const loading = ref(true)

onMounted(() => {
	axios
		.get('http://localhost:8000/api/joueurs/' + props.id)
		.then((response) => {
			selectedJoueur.value = response.data
			loading.value = false
		})
		.catch((error) => {
			// Handle errors here
			console.error('Error fetching joueur:', error)
			loading.value = false
		})
})

const getImagePath = (imageName) => {
	if (!imageName) {
		return '' // Return a default image or handle the absence of image
	}

	const basePath = "http://localhost:8000/joueurs/" // Adjust the base URL if needed
	return basePath + imageName // Construct the full image path
}

// Create a computed property to filter out the 'id' property
const filteredJoueur = computed(() => {
	if (selectedJoueur.value) {
		const filtered = { ...selectedJoueur.value }
		delete filtered.id
		return filtered
	}
	return null
})
</script>
  
<style lang="scss"></style>
