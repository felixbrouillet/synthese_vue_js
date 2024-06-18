<template>
  <div class="evenement-list" :class="{ wait: evenements.length === 0 }">
    <router-link :to="{ name: 'accueil' }">
      <button class="return-button">Retour</button>
    </router-link>
    <table class="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Équipe 1</th>
          <th>Équipe 2</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="evenement in evenements" :key="evenement.id">
          <td>{{ evenement.date }}</td>
          <td>
            <router-link :to="{ name: 'equipe.item', params: { id: evenement.equipe_1_id } }">
              {{ getTeamName(evenement.equipe_1_id) }}
            </router-link>
          </td>
          <td>
            <router-link :to="{ name: 'equipe.item', params: { id: evenement.equipe_2_id } }">
              {{ getTeamName(evenement.equipe_2_id) }}
            </router-link>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr></tr>
      </tfoot>
    </table>
  </div>
</template>


<script setup>
import { defineProps, ref, onBeforeMount } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const props = defineProps({
  evenements: {
    type: Array,
    default: () => []
  }
})

const router = useRouter()

const nom_equipe = ref({}) // Store team names

// Function to fetch team name by ID from API
const getTeamName = (equipe_id) => {
  return nom_equipe.value[equipe_id] || "N/A"
}

onBeforeMount(async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/equipes")
    const equipes = response.data
    equipes.forEach((equipe) => {
      nom_equipe.value[equipe.id] = equipe.nom
    })
  } catch (error) {
    console.error(error)
  }
})
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
