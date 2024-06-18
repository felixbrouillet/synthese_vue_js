<template>
	<div class="component">
		<router-link :to="{ name: 'equipe.index' }">
			<button class="return-button">Retour</button>
		</router-link>
		<template v-if="selectedEquipe">
			<div v-for="(value, key) in filteredEquipe" :key="key" class="equipe-details">
				<p v-if="key === 'image'" class="equipe-image">
					<!-- <img :src="getImagePath(value)" alt="Equipe Image" /> -->
				</p>
				<p class="equipe-property">
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
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
	id: {
		type: [Number, String],
		required: true,
	},
})

const selectedEquipe = ref(null)
const loading = ref(true)

onMounted(() => {
	axios
		.get('http://localhost:8000/api/equipes/' + props.id)
		.then((response) => {
			selectedEquipe.value = response.data
			loading.value = false
		})
		.catch((error) => {
			// Handle errors here
			console.error('Error fetching equipe:', error)
			loading.value = false
		})
})

const getImagePath = (imageName) => {
	if (!imageName) {
		return '' // Return a default image or handle the absence of image
	}

	const basePath = "http://localhost:8000/equipes/" // Adjust the base URL if needed
	return basePath + imageName // Construct the full image path
}

// Create a computed property to filter out the 'id' property
const filteredEquipe = computed(() => {
	if (selectedEquipe.value) {
		const filtered = { ...selectedEquipe.value }
		delete filtered.id
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

.equipe-details {
	margin-bottom: 10px;
	padding: 10px;
	background-color: white;
	border: 1px solid #ddd;
	border-radius: 5px;
}

.equipe-image {
	max-width: 100%;
	height: auto;
	border-radius: 5px;
}

.equipe-property {
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
  