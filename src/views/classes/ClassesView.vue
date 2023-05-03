<template>
    <div class="about">
        <h1 class="text-2xl font-bold text-left py-2">Manage Classes</h1>
        <div class="flex justify-center items-end space-x-3">
            <div>
                <h2>Name</h2>
                <input type="text" class="border border-gray-500 px-3 py-2">
            </div>
            <div>
                <h2>Name</h2>
                <input type="text" class="border border-gray-500 px-3 py-2">
            </div>
            <div>
                <button class="bg-gray-600 text-white py-2 px-3 hover:bg-gray-500">Save</button>
            </div>
        </div>
        <div class="overflow-x-auto relative sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6 text-lg">
                            Id
                        </th>
                        <th scope="col" class="py-3 px-6 text-lg">
                            Icons
                        </th>
                        <th scope="col" class="py-3 px-6 text-lg">
                            Names
                        </th>
                        <th scope="col" class="py-3 px-6 text-right text-lg">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(archetype, index) in archetypes" :key="index"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ archetype.id }}
                        </th>
                        <td class="py-4 px-6">
                            <font-awesome-icon :icon="archetype.icon" />
                        </td>
                        <td class="py-4 px-6">
                            {{ archetype.name }}
                        </td>
                        <td class="py-4 px-6 text-right">
                            <div class="inline-flex">
                                <RouterLink :to="{ name: 'class-edit', params: { id: archetype.id } }"
                                    class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-l">Edit
                                </RouterLink>
                                <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-r"
                                    @click="deleteArchetype(archetype.id)"> Delete
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
import { faBullseye, faHatWizard, faQuestion, faShield, faStaffSnake, faUserNinja } from '@fortawesome/free-solid-svg-icons'
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
                    return faQuestion // no icon for unknown types
            }
        },
        async deleteArchetype(archetypeId) {
            await fetch(`http://localhost:3000/classes/${archetypeId}`, {
                method: 'DELETE'
            }).then(() => {
                this.getArchetypes()
            })
        }
    },
    mounted() {
        this.getArchetypes()
    }
}
</script>

<style scoped></style>
