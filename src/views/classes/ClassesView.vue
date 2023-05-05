<template>
    <div class="about">
        <h1 class="text-2xl font-bold text-left py-2">Manage Archetypes</h1>
        <div class="flex justify-center items-end space-x-3 mb-4">
            <div>
                <h2>Name</h2>
                <input archetype="text" class="border border-gray-500 px-3 py-2 " v-model="selectedArchetype.name">
            </div>
            <div>
                <button class="bg-gray-600 text-white py-2 px-3 hover:bg-gray-500"
                    @click="createOrUpdateArchetype(selectedArchetype)">Save</button>
            </div>
        </div>
        <div class="overflow-x-auto relative sm:rounded-lg">
            <table class="w-full text-sm text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                    <tr>
                        <th scope="col" class="py-3 px-6 text-lg">
                            Id
                        </th>
                        <th scope="col" class="py-3 px-6 text-lg">
                            Names
                        </th>
                        <th scope="col" class="py-3 px-6 text-lg">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(archetype, index) in archetypes" :key="index"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                        <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ archetype.id }}
                        </td>
                        <td class="py-4 px-6">
                            <font-awesome-icon :icon="archetype.icon" />
                            {{ archetype.name }}
                        </td>
                        <td class="py-4 px-6">
                            <div class="inline-flex">
                                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-l"
                                    @click="editArchetype(archetype)">
                                    <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                                </button>
                                <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-r"
                                    @click="deleteArchetype(archetype.id)">
                                    <font-awesome-icon icon="fa-solid fa-trash" />
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <RouterLink to="/classes/new">Add</RouterLink>
</template>

<script>
import {
    faBullseye,
    faHatWizard,
    faQuestion,
    faShield,
    faStaffSnake,
    faUserNinja
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    name: "ClassesView",
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            archetypes: [],
            selectedArchetype: {},
        }
    },
    methods: {
        async getArchetypes() {
            const data = await fetch('http://localhost:3000/classes')
            this.archetypes = await data.json()

            for (const archetype of Object.values(this.archetypes)) {
                let icon = await this.getIconForArchetype(archetype)
                Object.assign(archetype, { "icon": icon })
            }
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
                    return faQuestion // icon for unknown types
            }
        },
        async deleteArchetype(archetypeId) {
            await fetch(`http://localhost:3000/classes/${archetypeId}`, {
                method: 'DELETE'
            })
            if (archetypeId === this.selectedArchetype.id) {
                this.selectedArchetype = {}
            }
            const index = this.archetypes.findIndex(archetype => archetype.id === archetypeId);
            this.archetypes.splice(index, 1);
        },
        async createOrUpdateArchetype() {
            if (!this.selectedArchetype.id) {
                this.addArchetype()
            } else {
                this.updateArchetype()
            }
            this.selectedArchetype.name = "";
            this.selectedArchetype = {};
        },
        async addArchetype() {
            const response = await fetch('http://localhost:3000/classes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.selectedArchetype.name,
                }),
            }).then(() => {
                this.selectedArchetype.name = ""
                this.getArchetypes()
            });
        },
        async updateArchetype() {
            const response = await fetch(`http://localhost:3000/classes/${this.selectedArchetype.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.selectedArchetype.name,
                }),
            }).then(() => {
                this.getArchetypes()
            });
        },
        editArchetype(archetype) {
            this.selectedArchetype = { ...archetype }
        },
    },
    mounted() {
        this.getArchetypes()
    }
}
</script>

<style scoped></style>
