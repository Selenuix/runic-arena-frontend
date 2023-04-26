<template>
    <div class="cards-container">
        <h1>Manage Cards</h1>
        <div class="cards-items">
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Power</th>
                    <th>Type_id</th>
                    <th>Class_id</th>
                    <th>Actions</th>
                </tr>
                <tr v-for="(card, index) in cards" :key="index" class="card-item">
                    <td>{{ card.id }}</td>
                    <td>{{ card.name }}</td>
                    <td>{{ card.image }}</td>
                    <td>{{ card.power }}</td>
                    <td>{{ card.type_id }}</td>
                    <td>{{ card.class_id }}</td>
                    <td>
                        <RouterLink to="/cards/new">Edit</RouterLink>
                        <button @click="deleteCard(card.id)">Delete</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardsView",
    data() {
        return {
            cards: null
        }
    },
    methods: {
        async getCards() {
            const data = await fetch('http://localhost:3000/cards')
            this.cards = await data.json()
        },
        async deleteCard(cardId) {
            await fetch(`http://localhost:3000/cards/${cardId}`, {
                method: 'DELETE'
            }).then(() => {
                this.getCards()
            })
        }
    },
    mounted() {
        this.getCards()
    }
}
</script>

<style>
</style>
