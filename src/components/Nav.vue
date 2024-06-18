<template>
	<nav class="navbar">
	  <ul class="nav-list">
		<li><router-link :to="{ name: 'accueil' }">Accueil</router-link></li>
		<li><router-link :to="{ name: 'equipe.index' }">équipes</router-link></li>
		<li><router-link :to="{ name: 'joueur.index' }">joueurs</router-link></li>
		<li><router-link :to="{ name: 'evenement.index' }">événements</router-link></li>
	  </ul>
	</nav>
  </template>
  
  <style scoped>
  .navbar {
	background-color: black;
  }
  
  .nav-list {
	display: flex;
	justify-content: center;
	padding: 1rem 0;
	list-style: none;
  }
  
  .nav-list li {
	margin-right: 1.5rem;
  }
  
  .nav-list a {
	color: white;
	text-decoration: none;
	transition: color 0.3s;
  }
  
  .nav-list a:hover {
	color: #ccc;
  }
  </style>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  </script>
  