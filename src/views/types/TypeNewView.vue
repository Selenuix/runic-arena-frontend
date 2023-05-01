<template>
    <div class="cards-container">
        <h1>Add a Type</h1>
        <div class="cards-items">
            <p v-if="message">{{ message }}</p>
            <form action="#" enctype="multipart/form-data" method="post">
                <div>
                    <label for="cardName">Name:</label>
                    <input id="cardName" v-model="type.name" name="cardName" type="text">
                </div>
                <div>
                    <button @click="addType">Add</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "TypeNewView",
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
        async addType(e) {
            e.preventDefault()

            let formData = new FormData();
            formData.append('name', this.type.name);

            try {
                await fetch('http://localhost:3000/types/', {
                    method: 'POST',
                    body: formData
                }).then(() => {
                    this.message = "Type has been sucessfully created."
                    this.$router.push('/types')
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
