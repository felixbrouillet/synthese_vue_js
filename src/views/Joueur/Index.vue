<template>
	<div class="component">
	  <JoueurList :joueurs="joueurs" />
	  
    
	  <!-- <JoueurForm v-if="afficherForm" :joueur="joueur" @submit="evt.submit" /> -->
	  
	</div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';
import JoueurList from '@/components/Joueur/List.vue';
import JoueurForm from '@/components/Joueur/Form.vue';

// const afficherForm = ref(false); // Variable to control the visibility of the form

const joueur = ref({
  "prenom": "",
  "nom": "",
});

const joueurs = ref([]);

onBeforeMount(() => {
  axios('http://localhost:8000/api/joueurs').then(response => {
    joueurs.value = response.data;
  });
});

const evt = {
  "submit": () => {
    axios.post('http://localhost:8000/api/joueurs', joueur.value).then(() => {
      return axios('http://localhost:8000/api/joueurs');
    }).then(response => {
      joueurs.value = response.data;
      afficherForm.value = false; // Hide the form after submission
    });
  },
};
</script>

<style>
.component {
  font-family: Arial, sans-serif;
  margin: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Farming theme adjustments */
.component {
  background-color: #f0f6f0;
}

/* Adjustments for the form and list */
.joueur-list {
  margin-top: 20px;
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

/* Form styles */
.joueur-form {
  margin-top: 20px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Input styles */
.input-field {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Submit button styles */
.submit-button {
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
