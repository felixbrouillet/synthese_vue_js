<template>
	<div class="component">
	  <router-link :to="{ name: 'equipe.index' }">
		<button class="return-button">Retour</button>
	  </router-link>
	  <template v-if="selectedEquipe">
		<div v-for="(value, key) in selectedEquipe" :key="key">
		  <!-- Exclude displaying the id -->
		  <p v-if="key === 'image'">
			<!-- <img :src="getImagePath(value)" alt="Equipe Image" /> -->
		  </p>
		  <p v-else-if="key !== 'id'">{{ value }}</p>
		</div>
	  </template>
	  <p v-else>Loading...</p>
	  <!-- Handle errors here -->
	</div>
  </template>
  
  
<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
  
const props = defineProps({
	id: {
	  type: [Number, String],
	  required: true,
	},
});
  
const selectedEquipe = ref(null);
const loading = ref(true);

onMounted(() => {
	axios
		.get('http://localhost:8000/api/equipes/' + props.id)
		.then((response) => {
		  selectedEquipe.value = response.data;
		  loading.value = false;
		})
		.catch((error) => {
		  // Handle errors here
		  console.error('Error fetching equipe:', error);
		  loading.value = false;
		});
});

const getImagePath = (imageName) => {
	if (!imageName) {
	  return ''; // Return a default image or handle the absence of image
	}
	
	const basePath = "http://localhost:8000/equipes/"; // Adjust the base URL if needed
	return basePath + imageName; // Construct the full image path
};
</script>
  
<style lang="scss">

</style>
