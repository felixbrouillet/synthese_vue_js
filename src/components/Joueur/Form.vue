<template>
	<form class="form-joueur" @submit.prevent="evt.submit">
		<div class="form-row">
			<label for="nom">Nom</label>
			<span><input type="text" id="nom" name="nom" v-model="joueur.nom"></span>
		</div>
		<div class="form-row">
			<label for="prenom">Prenom</label>
			<span><input type="text" id="prenom" name="prenom" v-model="joueur.prenom"></span>
		</div>
		<div class="form-row">
			<label for="points">points</label>
			<span><input type="number" id="points" name="points" v-model="joueur.points"></span>
		</div>
		<div class="form-row">
			<label for="equipe_id">id de l'équipe</label>
			<span><input type="number" id="equipe_id" name="equipe_id" v-model="joueur.equipe_id"></span>
		</div>
		<div class="form-row">
			<label for="pays">Pays d'origine</label>
			<span><input type="text" id="pays" name="pays" v-model="joueur.pays"></span>
		</div>
		<div class="form-row">
			<label for="position">Position</label>
			<span><input type="text" id="position" name="position" v-model="joueur.position"></span>
		</div>
		<div class="form-row">
			<label for="numero">Numéro</label>
			<span><input type="number" id="numero" name="numero" v-model="joueur.numero"></span>
		</div>
		<div class="form-row">
			<label for="poid_kg">poid en kilo</label>
			<span><input type="number" id="poid_kg" name="poid_kg" v-model="joueur.poid_kg"></span>
		</div>

		<div class="form-row">
			<label for="taille_metre">Taille en mètre</label>
			<span><input type="number" id="taille_metre" name="taille_metre" step="any"
					v-model="joueur.taille_metre"></span>
		</div>

		<!-- EN TEST -->
		<div>
			<label for="photo">Photo</label>
			<input type="file" name="photo" id="photo" />
		</div>




		<div class="form-row">
			<slot><button type="submit">Envoyer</button></slot>
		</div>
	</form>
</template>
  
<script setup>
import { defineProps, defineEmits, ref } from 'vue'
const props = defineProps({
	joueur: {
		type: Object,
		default: () => ({})
	},
})
const joueur = ref(props.joueur)


const emit = defineEmits(['submit'])

const evt = {
	submit: () => {
		emit('submit', new FormData(document.forms[0]));
	}
};




</script>
  
<style lang="scss">
form.form-joueur {
	display: grid;
	grid-template-columns: auto 1fr;
	grid-gap: 1rem;

	>div {
		display: contents;
		align-items: center;

		>span {
			display: flex;
			align-items: center;
		}
	}
}
</style>
  