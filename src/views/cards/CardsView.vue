<template>
    <div class="cards-container">
        <h1>Manage Cards</h1>
        <RouterLink to="/cards/new">Add</RouterLink>
        <div class="cards-items">
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Power</th>
                    <th>Type</th>
                    <th>Class</th>
                    <th>Actions</th>
                </tr>
                <tr v-for="(card, index) in cards" :key="index" class="card-item">
                    <td>{{ card.id }}</td>
                    <td>{{ card.name }}</td>
                    <td>{{ card.image }}</td>
                    <td>{{ card.power }}</td>
                    <td>
                        <font-awesome-icon :icon="card.type.icon"/>
                        {{ card.type.name }}
                    </td>
                    <td>
                        <font-awesome-icon :icon="card.class.icon"/>
                        {{ card.class.name }}
                    </td>
                    <td>
                        <RouterLink :to="{name: 'card-edit', params: {id: card.id}}">Edit</RouterLink>
                        <button @click="deleteCard(card.id)">Delete</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import {
    faBullseye,
    faHatWizard,
    faMoon,
    faShield,
    faStaffSnake,
    faSun,
    faUserNinja
} from "@fortawesome/free-solid-svg-icons";

export default {
    name: "CardsView",
    data() {
        return {
            cards: []
        }
    },
    methods: {
        async getCards() {
            const data = await fetch('http://localhost:3000/cards')
            this.cards = await data.json()

            for (const card of Object.values(this.cards)) {
                let icon = await this.getIconForType(card.type)
                let archetypeIcon = await this.getIconForArchetype(card.class)

                Object.assign(card.type, {"icon": icon});
                Object.assign(card.class, {"icon": archetypeIcon});
            }
        },

        async getIconForType(type) {
            switch (type.name) {
                case 'Chaos':
                    return faMoon
                case 'Halo':
                    return faSun
                default:
                    return null // no icon for unknown types
            }
        },
        async getIconForArchetype(archetype) {
            switch (archetype.name) {
                case 'Warrior':
                    return faShield
                case 'Healer':
                    return faStaffSnake
                case 'Assassin':
                    return faUserNinja
                case 'Wizard':
                    return faHatWizard
                case 'Archer':
                    return faBullseye
                default:
                    return null // no icon for unknown types
            }
        },
        async deleteCard(cardId) {
            await fetch(`http://localhost:3000/cards/${cardId}`, {
                method: 'DELETE'
            }).then(() => {
                this.getCards()
            })
        },
    },

    async mounted() {
        await this.getCards()
    }
}
</script>

<style scoped>
</style>
