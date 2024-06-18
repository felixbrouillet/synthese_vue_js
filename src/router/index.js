import { createRouter, createWebHistory } from 'vue-router';
import IndexView from '../views/Index.vue';

// Événements 
import EvenementIndex from '../views/Evenement/Index.vue';

// joueurs
import JoueurIndex from '../views/Joueur/Index.vue';
import JoueurItem from '../views/Joueur/Item.vue';
import JoueurCreate from '../views/Joueur/Create.vue';
import JoueurEdit from '../views/Joueur/Edit.vue';
import JoueurDelete from '../views/Joueur/Delete.vue';

// Équipe
import EquipeIndex from '../views/Equipe/Index.vue';
import EquipeItem from '../views/Equipe/Item.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

        // Accueil 
        {
            path: '/',
            name: 'accueil',
            component: IndexView
        },

        // Affiche la liste des joueurs
        {
            path: '/joueur',
            name: 'joueur.index',
            component: JoueurIndex
        },

        // Affiche un seul joueur et ses infos path : joueur/:id
        {
            path: '/joueur/:id',
            name: 'joueur.item',
            component: JoueurItem,
            props: true,
        },

        // Permet de créer un joueur, path: joueur/:id/create.
        {
            path: '/joueur/create',
            name: 'joueur.create',
            component: JoueurCreate,
        },

        // permet de modifier un élement, path : joueur/:id/edit
        {
            path: '/joueur/:id/edit',
            name: 'joueur.edit',
            component: JoueurEdit,
            props: true,
        },

        // Permet de supprimer un joueur
        {
            path: '/joueur/:id/delete',
            name: 'joueur.delete',
            component: JoueurDelete,
            props: true,
        },

        // Affiche la liste des equipes
        {
            path: '/equipe',
            name: 'equipe.index',
            component: EquipeIndex
        },

        // Affiche une seule équipe et ses infos path : equipe/:id
        {
            path: '/equipe/:id',
            name: 'equipe.item',
            component: EquipeItem,
            props: true,
        },

        // Affiche la liste des événements
        {
            path: '/evenement',
            name: 'evenement.index',
            component: EvenementIndex
        },
    ]
});

export default router;
