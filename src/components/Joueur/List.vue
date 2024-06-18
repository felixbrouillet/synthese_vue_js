<template>
  <div class="joueur-list" :class="{ wait: joueurs.length === 0 }">

    <router-link :to="{ name: 'accueil' }">
      <button class="return-button">Retour</button>
    </router-link>

    <router-link :to="{ name: 'joueur.create' }" class="add-button">Ajouter un Joueur</router-link>

    <table class="table">
      <thead>
        <tr>
          <th>Nom | prenom</th>
          <th>Points</th>
          <th>Modifier</th>
          <th>Supprimer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="joueur in joueurs" :key="joueur.id">
          <td>
            <router-link :to="{ name: 'joueur.item', params: { id: joueur.id } }">
              {{ joueur.nom }}, {{ joueur.prenom }}
            </router-link>
          </td>
          <td>
            {{ joueur.points }}
          </td>
          
          <!-- Boutton supprimer et modifier  -->
          <td><router-link :to="{ name: 'joueur.edit', params: { id: joueur.id } }">Modifier</router-link></td>
          <td><button class="delete-button" @click="evt.delete(joueur.id)">Supprimer</button></td>

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
  joueurs: {
    type: Array,
    default: () => []
  }
})

const router = useRouter()

const evt = {
  delete: async (id) => {
    if (!confirm("Voulez-vous vraiment supprimer ce joueur ?")) return;

    try {
      await axios.delete("http://localhost:8000/api/joueurs/" + id);
      router.go(0); // Refresh the component after successful deletion
    } catch (error) {
      console.error(error);
      // Handle error if the deletion fails
    }
  }
}
</script>

<style scoped>

/* Boutton ajouter un joueur */
.add-button {
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-left: 10px; /* Add space on the left */
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
}

.add-button:hover {
  background-color: #219d4d;
}

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
