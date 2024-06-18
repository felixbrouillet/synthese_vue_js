<template>
  <div class="team-list" :class="{ wait: equipes.length === 0 }">
    <router-link :to="{ name: 'accueil' }">
      <button class="return-button">Retour</button>
    </router-link>
    <table class="table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Points</th>
          <th>Ville</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="equipe in equipes" :key="equipe.id">
          <td>
            <router-link :to="{ name: 'equipe.item', params: { id: equipe.id } }">

              {{ equipe.nom }}
            </router-link>
          </td>
          <td>{{ equipe.points }}</td>
          <td>{{ equipe.ville }}</td>
          <!-- <td><router-link :to="{ name: 'equipe.edit', params: { id: equipe.id } }">Modifier</router-link></td> -->
          <!-- <td><button class="delete-button" @click="evt.delete(equipe.id)">Supprimer</button></td> -->
        </tr>
      </tbody>
      <tfoot>
        <tr></tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const props = defineProps({
  equipes: {
    type: Array,
    default: () => []
  }
})

const router = useRouter()


</script>

<style scoped>
/* Boutton retour  */
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

/* Table styles */
.table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #e2e2e2;
  font-size: 14px;
}

.table th,
.table td {
  padding: 12px;
  border: 1px solid #e2e2e2;
  text-align: left;
}

.table th {
  background-color: #f2f2f2;
  font-weight: bold;
  color: #333;
}

/* Button styles */
.delete-button {
  background-color: transparent;
  color: #d32323;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: color 0.3s;
}

.delete-button:hover {
  color: #ff4848;
}
</style>
