<template>
	<div class="component">
	  <vueper-slides>
		<vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content">
		</vueper-slide>
	  </vueper-slides>
	</div>
  </template>
  
  <script setup>
  import { VueperSlides, VueperSlide } from 'vueperslides'
  import 'vueperslides/dist/vueperslides.css'
  
  const slides = [
	{
	  title: 'Slide #1',
	  content: '<img src="images/tchoukball3.png" alt="Slide Image" style="transform: scale(0.7);">',
	},
	{
	  title: 'Slide #2',
	  content: '<img src="images/tchoukball2.png" alt="Slide Image" style="transform: scale(0.6);">',
	},
	{
	  title: 'Slide #3',
	  content: '<img src="images/tchoukball4.png" alt="Slide Image" style="transform: scale(0.6);">',
	}
  ]
  </script>
  
  <style scoped>
  /* Style for the image in the slide */
  .vueper-slide-content img {
	max-width: 100%; /* Adjust the image width as needed */
	height: auto; /* Maintain aspect ratio */
  }
  </style>
  