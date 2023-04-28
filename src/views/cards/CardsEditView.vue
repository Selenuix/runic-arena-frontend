<template>
    <h1>{{ card.name }}</h1>

    <div class="cards-container">
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
                    <button @click="editCard">Edit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardsEditView",
    data() {
        return {
            card: {
                name: '',
                image: '',
                power: 0,
                type: Number,
                archetype: 0,
            },
            types: {},
            selectedType: 0,
            archetypes: {},
            message: ''
        }
    },
    methods: {
        async getCard(cardId) {
            const data = await fetch(`http://localhost:3000/cards/${cardId}`)
            this.card = await data.json()
        },
        async getTypes() {
            const data = await fetch('http://localhost:3000/types')
            this.types = await data.json()
        },

        async getArchetypes() {
            const data = await fetch('http://localhost:3000/classes')
            this.archetypes = await data.json()
        },

        async editCard(e) {
            e.preventDefault()

            let formData = new FormData();
            formData.append('name', this.card.name);
            formData.append('image', this.card.image);
            formData.append('power', this.card.power);
            formData.append('type_id', this.card.type);
            formData.append('class_id', this.card.archetype);


            try {
                await fetch(`http://localhost:3000/cards/${this.card.id}`, {
                    method: 'PUT',
                    body: formData
                })

                this.message = "Card has been sucessfully edited."
            } catch (err) {
                this.message = err;
            }

        }
    },
    async mounted() {
        await this.getCard(this.$route.params.id)
        await this.getTypes()
        await this.getArchetypes()
    }
}
</script>

<style scoped>

</style>