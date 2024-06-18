<template>
    <div class="component">
      <EventList :evenements="evenements" />
      <!-- <button @click="afficherForm = !afficherForm"> {{ !afficherForm ? 'Ajouter un événement' : 'Annuler' }} </button> -->
      <!-- <EventForm v-if="afficherForm" :evenement="evenement" @submit="evt.submit" /> -->
    </div>
  </template>
  
  <script setup>
  import { onBeforeMount, ref } from 'vue';
  import axios from 'axios';
  import EventList from '@/components/Evenement/List.vue';
  
  // const afficherForm = ref(false); // Variable to control the visibility of the form
  
  const evenement = ref({
    "nom": "",
    "nom_en": "",
  });
  
  const evenements = ref([]);
  
  onBeforeMount(() => {
    axios('http://localhost:8000/api/evenements').then(response => {
      evenements.value = response.data;
    });
  });
  
  const evt = {
    // "submit": () => {
    //   axios.post('http://localhost:8000/api/evenements', evenement.value).then(() => {
    //     return axios('http://localhost:8000/api/evenements');
    //   }).then(response => {
    //     evenements.value = response.data;
    //     afficherForm.value = false; // Hide the form after submission
    //   });
    // },
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
  .event-list {
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
  .event-form {
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
  