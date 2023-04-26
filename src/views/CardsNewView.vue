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
                    <label for="type">Type:</label>

                    <select name="type" id="type" v-model="card.type">
                        <option v-for="(type, index) in types"
                                :key="index"
                                :value="type.id">
                            {{ type.name }}
                        </option>
                    </select>
                </div>
                <div>
                    <label for="archetype">Class:</label>

                    <select name="archetype" id="archetype" v-model="card.archetype">
                        <option v-for="(archetype, index) in archetypes" :key="index"
                                :value="archetype.id">
                            {{ archetype.name }}
                        </option>
                    </select>
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
                type: 0,
                archetype: 0,
            },
            types: {},
            archetypes: {},
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
            formData.append('type_id', this.card.type);
            formData.append('class_id', this.card.archetype);

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
        },

        async getTypes() {
            const data = await fetch('http://localhost:3000/types')
            this.types = await data.json()
        },

        async getArchetypes() {
            const data = await fetch('http://localhost:3000/classes')
            this.archetypes = await data.json()
        }
    },
    async mounted() {
        await this.getTypes()
        await this.getArchetypes()
    }
}
</script>

<style scoped>
</style>
