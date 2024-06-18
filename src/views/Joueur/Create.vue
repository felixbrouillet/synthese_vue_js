<template>
	<div class="component">
		<h1>Nouveau joueur</h1>
		<JoueurForm ref="form" :joueur="joueur" @submit="evt.submit" />
		<router-link :to="{ name: 'joueur.index' }">Annuler</router-link>
	</div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import JoueurForm from '@/components/Joueur/Form.vue';
// import { fakerFR as faker } from '@faker-js/faker';
const router = useRouter();
const props = defineProps({
	// ...
});
const joueur = ref({
	"nom": "",
	"prenom": "",
});


const form = ref();

const evt = {
	submit: (formData) => {
		axios.post('http://localhost:8000/api/joueurs', formData).then((response) => {
			router.push({ name: 'joueur.index' });
		});
	}
};



</script>

<style lang="scss"></style>
