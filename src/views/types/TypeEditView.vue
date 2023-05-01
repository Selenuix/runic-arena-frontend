<template>
    <h1>{{ type.name }}</h1>

    <div class="cards-container">
        <div class="cards-items">
            <p v-if="message">{{ message }}</p>
            <form action="#" enctype="multipart/form-data" method="post">
                <div>
                    <label for="cardName">Name:</label>
                    <input id="cardName" v-model="type.name" name="cardName" type="text">
                </div>
                <div>
                    <button @click="editType">Edit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "TypeEditView",
    data() {
        return {
            type: {
                id: Number,
                name: ''
            },
            message: ''
        }
    },
    methods: {
        async getType(cardId) {
            const data = await fetch(`http://localhost:3000/types/${cardId}`)
            this.type = await data.json()
        },

        async editType(e) {
            e.preventDefault()

            let formData = new FormData();
            formData.append('name', this.type.name);

            try {
                await fetch(`http://localhost:3000/types/${this.type.id}`, {
                    method: 'PUT',
                    body: formData
                }).then(() => {
                    this.message = "Type has been sucessfully edited."
                    this.$router.push('/types')
                })
            } catch (err) {
                this.message = err;
            }

        },
    },
    async mounted() {
        await this.getType(this.$route.params.id)
    }
}
</script>

<style scoped>

</style>
