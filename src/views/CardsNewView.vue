<template>
    <div class="cards-container">
        <h1>Manage Cards</h1>
        <div class="cards-items">
            <p v-if="message">{{ message }}</p>
            <form action="#" method="post">
                <div>
                    <label for="cardName">Name:</label>
                    <input type="text" name="cardName" id="cardName" v-model="card.name">
                </div>
                <div>
                    <label for="cardImage">Image:</label>
                    <input type="text" name="cardImage" id="cardImage" v-model="card.image">
                </div>
                <div>
                    <label for="cardPower">Power:</label>
                    <input type="text" name="cardPower" id="cardPower" v-model="card.power">
                </div>
                <div>
                    <label for="cardType">Type:</label>
                    <input type="text" name="cardType" id="cardType" v-model="card.type_id">
                </div>
                <div>
                    <label for="cardClass">Class:</label>
                    <input type="text" name="cardClass" id="cardClass" v-model="card.archetype_id">
                </div>
                <div>
                    <button @click="addCard">Add</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardsView",
    data() {
        return {
            card: {
                name: '',
                image: '',
                power: 0,
                type_id: 0,
                archetype_id: 0
            },
            message: ''
        }
    },
    methods: {
        async addCard(e) {
            e.preventDefault()

            let formData = new FormData();

            formData.append('name', this.card.name);
            formData.append('image', this.card.image);
            formData.append('power', this.card.power);
            formData.append('type_id', this.card.type_id);
            formData.append('archetype_id', this.card.archetype_id);

            try {
                const addCard = await fetch('http://localhost:3000/cards/', {
                    method: 'POST',
                    body: formData,
                    redirect: "follow"
                })

                this.message = "Card has been sucessfully created."
            } catch (err) {
                this.message = err;
            }
        }
    }
}
</script>

<style scoped>
</style>
