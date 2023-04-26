<template>
  <div class="about">
    <h1>Manage Classes</h1>
  </div>
  <div class="archetypes-items">
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>

                </tr>
                <tr v-for="(archetype, index) in archetypes" :key="index" class="archetype-item">
                    <td>{{ archetype.id }}</td>
                    <td>{{ archetype.name }}</td>
                    <td>
                        <button>Edit</button>
                        <button @click="deleteArchetype(archetype.id)">Delete</button>
                    </td>
                </tr>
            </table>
        </div>
</template>

<script>
export default {
    name: "ClassesView",
    data() {
        return {
          archetypes: String
        }
    },
    methods: {
        async getArchetypes() {
            const data = await fetch('http://localhost:3000/classes')
            this.archetypes = await data.json()
        },
        async deleteArchetype(archetypeId) {
            await fetch(`http://localhost:3000/classes/${archetypeId}`, {
                method: 'DELETE'
            })
        }
    },
    mounted() {
        this.getArchetypes()
    },
    updated() {
        this.getArchetypes()
    }
}
</script>

<style>
</style>
