<template>
	<div class="component">
		<h1>Supprimer un joueur</h1>
		<!-- Render your delete form or confirmation UI here -->
	</div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'

const props = defineProps({
	"joueur": {
		"type": Object,
		"default": () => ({})
	},
})


</script>

<style lang="scss"></style>
