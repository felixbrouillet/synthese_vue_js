<template>
  <main>
    <Carrousel />
    <!-- Section de présentation de la ligue -->
    <section class="league-presentation">
      <h2>Présentation de la Ligue Nationale de Tchoukball</h2>
      <p>La Ligue Nationale de Tchoukball est une organisation dédiée à la promotion et au développement du tchoukball...</p>
    </section>

    <!-- Section Équipes -->
    <section class="teams-section">
      <h2 class="section-title">Équipe en vedette</h2>
      <div class="cards-container">
        <div class="team-card">
          <!-- Première équipe -->
          <div class="team-image">
            <img src="public\images\logo_sport1.png" alt="Équipe 1">
          </div>
          <h3>Victorieux de Victoriaville</h3>
          <p>Les victorieux on une saison record avec 39 victoires en 2022</p>
        </div>


        <!-- Ajoutez plus d'équipes ici -->
      </div>
    </section>

    <!-- Section Joueurs Vedettes -->
    <section class="star-players-section">
      <h2 class="section-title">Joueurs Vedettes</h2>
      <div class="cards-container">
        <div class="player-card">
          <!-- Premier joueur vedette -->
          <div class="player-image">
            <img src="public\images\portait2.png" alt="Joueur 1">
          </div>
          <h3>James Jamieson</h3>
          <p>il a obtenu 3 points en moyennes dans la saison 2022-2023</p>
        </div>

        <div class="player-card">
          <!-- Deuxième joueur vedette -->
          <div class="player-image">
            <img src="public\images\portrait1.png" alt="Joueur 2">
          </div>
          <h3>Hugo Robertson</h3>
          <p>Il a obtenu 4 assistances en moyennes par match lors de la saison 2022-2023</p>
        </div>

        <!-- Ajoutez plus de joueurs vedettes ici -->
      </div>
    </section>

    
  </main>
</template>

<script setup>
import Carrousel from '@/components/Carrousel.vue'
</script>

<style scoped>
/* Styles pour la section de présentation */
.league-presentation {
  background-color: #f5f5f5;
  padding: 3rem 0;
  text-align: center;
}

.section-title{
  text-align: center;
}

.league-presentation h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.league-presentation p {
  color: #777;
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto;
}

/* Styles pour les cartes d'équipes et de joueurs vedettes */
.team-card,
.player-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.team-card:hover,
.player-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.team-card h3,
.player-card h3 {
  font-size: 1.3rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.team-image img,
.player-image img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
