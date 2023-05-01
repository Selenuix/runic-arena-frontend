<template>
    <div class="cards-container">
        <h1>Add a Type</h1>
        <div class="cards-items">
            <p v-if="message">{{ message }}</p>
            <form action="#" enctype="multipart/form-data" method="post">
                <div>
                    <label for="cardName">Name:</label>
                    <input id="cardName" v-model="archetype.name" name="cardName" type="text">
                </div>
                <div>
                    <button @click="addArchetype">Add</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "ClassNewView",
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
        async addArchetype(e) {
            e.preventDefault()

            let formData = new FormData();
            formData.append('name', this.type.name);

            try {
                await fetch('http://localhost:3000/classes/', {
                    method: 'POST',
                    body: formData
                }).then(() => {
                    this.message = "Class has been sucessfully created."
                    this.$router.push('/classes')
                })
            } catch (error) {
                this.message = error.response.data.message
            }
        },
    }
}
</script>

<style scoped>
</style>
