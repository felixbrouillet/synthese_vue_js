<template>
  <div class="component">
    <h1>Modifier un joueur</h1>
    <JoueurForm v-if="joueur" ref="form" :joueur="joueur" @submit="evt.submit" />
    <router-link :to="{ name: 'joueur.index' }">Annuler</router-link>
  </div>
</template>

<script setup>
import { defineProps, ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import JoueurForm from '@/components/Joueur/Form.vue';

const router = useRouter();
const props = defineProps({
  id: {
    type: [Number, String],
    required: true,
  },
});

const joueur = ref(null);

onBeforeMount(async () => {
  try {
    const response = await axios.get(`http://localhost:8000/api/joueurs/${props.id}`);
    console.log('Player data:', response.data);
    joueur.value = response.data;
  } catch (error) {
    console.error('Error fetching player data:', error);
  }
});

const form = ref();

const evt = {
  submit: async () => {
    form.value.$el.classList.add('wait');

    if (joueur.value && joueur.value.id) {
      try {
        const response = await axios.post(`http://localhost:8000/api/joueurs/${joueur.value.id}`, joueur.value);
        router.push({ name: 'joueur.index', params: { id: response.data.success.id } });
      } catch (error) {
        console.error('Error editing joueur:', error);
      }
    } else {
      console.error('joueur.value or joueur.value.id is undefined.');
    }
  },
};

</script>

<style lang="scss"></style>
