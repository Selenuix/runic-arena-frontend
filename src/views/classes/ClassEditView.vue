<template>
    <h1>{{ archetype.name }}</h1>

    <div class="cards-container">
        <div class="cards-items">
            <p v-if="message">{{ message }}</p>
            <form action="#" enctype="multipart/form-data" method="post">
                <div>
                    <label for="cardName">Name:</label>
                    <input id="cardName" v-model="archetype.name" name="cardName" type="text" autofocus>
                </div>
                <div>
                    <button @click="editArchetype">Edit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "ClassEditView",
    data() {
        return {
            archetype: {
                id: Number,
                name: ''
            },
            message: ''
        }
    },
    methods: {
        async getArchetype(archetypeId) {
            const data = await fetch(`http://localhost:3000/classes/${archetypeId}`)
            this.archetype = await data.json()
        },

        async editArchetype(e) {
            e.preventDefault()

            let formData = new FormData();
            formData.append('name', this.archetype.name);

            try {
                await fetch(`http://localhost:3000/classes/${this.archetype.id}`, {
                    method: 'PUT',
                    body: formData
                }).then(() => {
                    this.message = "Class has been sucessfully edited."
                    this.$router.push('/classes')
                })
            } catch (err) {
                this.message = err;
            }
        },
    },
    async mounted() {
        await this.getArchetype(this.$route.params.id)
    }
}
</script>

<style scoped>

</style>
