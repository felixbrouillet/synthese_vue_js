<template>
	<div class="component">
		<router-link :to="{ name: 'joueur.index' }">
			<button class="return-button">Retour</button>
		</router-link>
		<template v-if="selectedJoueur">
			<p>Prénom : {{ filteredJoueur.prenom }}</p>
			<p>Nom : {{ filteredJoueur.nom}}</p>
			<p>Points : {{ filteredJoueur.points }}</p>
			<p>Points : {{ filteredJoueur.points }}</p>
			<p>Grandeur (M) : {{ filteredJoueur.taille_metre }}</p>
			<p>Poid (Kg) : {{ filteredJoueur.poid_kg}}</p>
			<p>Numéro : {{ filteredJoueur.numero}}</p>
			<p>equipe: {{ filteredJoueur.numero}}</p>

			
			<p>Image : <img :src="'http://localhost:8000/img/joueurs/' + filteredJoueur.id + '/512x512.webp'" alt=""></p>
			
		</template>
		<p v-else class="loading-message">Loading...</p>
		<!-- Handle errors here -->
	</div>
</template>
  
<script setup>
import axios from 'axios'
import { ref, onMounted, computed } from 'vue'

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
		.get('http://localhost:8000/api/joueurs/' + props.id) // Use the correct API endpoint for "joueur"
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

	const basePath = "http://localhost:8000/joueurs/" // Use the correct base URL for "joueur"
	return basePath + imageName // Construct the full image path
}

// Create a computed property to filter out the 'id' property
const filteredJoueur = computed(() => {
	if (selectedJoueur.value) {
		const filtered = { ...selectedJoueur.value }
		return filtered
	}
	return null
});
</script>
  
<style lang="scss">
/* Your previous styles here */
/* Boutton retour */
.return-button {
	background-color: #3498db;
	color: white;
	border: none;
	border-radius: 5px;
	padding: 5px 10px;
	cursor: pointer;
	transition: background-color 0.3s;
}

.return-button:hover {
	background-color: #2980b9;
}

/* Button styles */
.button {
	padding: 10px 20px;
	background-color: #4caf50;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

.button:hover {
	background-color: #45a049;
}

.component {
	font-family: Arial, sans-serif;
	margin: 20px;
	padding: 20px;
	background-color: #f5f5f5;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.joueur-details {
	margin-bottom: 10px;
	padding: 10px;
	background-color: white;
	border: 1px solid #ddd;
	border-radius: 5px;
}

.joueur-image {
	max-width: 100%;
	height: auto;
	border-radius: 5px;
}

.joueur-property {
	margin: 5px 0;
}

.property-name {
	font-weight: bold;
}

.loading-message {
	font-size: 18px;
	font-weight: bold;
}
</style>
