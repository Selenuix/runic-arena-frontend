<template>
    <div class="about">
        <h1>Manage Classes</h1>
    </div>
    <div class="archetypes-items">
        <table>
            <tr>
                <th>Id</th>
                <th>Icon</th>
                <th>Name</th>

            </tr>
            <tr v-for="(archetype, index) in archetypes" :key="index" class="archetype-item">

                <td>{{ archetype.id }}</td>
                <td><font-awesome-icon :icon="archetype.icon" /></td>
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
import { faBullseye, faHatWizard, faShield, faStaffSnake, faUserNinja } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    name: "ClassesView",
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            archetypes: []
        }
    },
    methods: {
        async getArchetypes() {
            const data = await fetch('http://localhost:3000/classes')
            const archetypes = await data.json()
            this.archetypes = archetypes.map(archetype => {
                return {
                    ...archetype,
                    icon: this.getIconForArchetype(archetype)
                }
            })
        },
        getIconForArchetype(archetype) {
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

<style scoped></style>
