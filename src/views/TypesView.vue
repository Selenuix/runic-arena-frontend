<template>
    <div class="about">
        <h1 class="text-2xl font-bold text-left py-2">Manage Types</h1>
        <div class="flex justify-center items-end space-x-3 mb-4">
            <div>
                <h2>Name</h2>
                <input v-model="selectedType.name" class="border border-gray-500 px-3 py-2 " type="text">
            </div>
            <div>
                <button class="bg-gray-600 text-white py-2 px-3 hover:bg-gray-500"
                        @click="createOrUpdateType(selectedType)">Save
                </button>
            </div>
        </div>
        <div class="overflow-x-auto relative sm:rounded-lg">
            <table class="w-full text-sm text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                <tr>
                    <th class="py-3 px-6 text-lg" scope="col">
                        Id
                    </th>
                    <th class="py-3 px-6 text-lg" scope="col">
                        Names
                    </th>
                    <th class="py-3 px-6 text-lg" scope="col">
                        Actions
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(type, index) in types" :key="index"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                    <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ type.id }}
                    </td>
                    <td class="py-4 px-6">
                        <font-awesome-icon :icon="type.icon"/>
                        {{ type.name }}
                    </td>
                    <td class="py-4 px-6">
                        <div class="inline-flex">
                            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-l"
                                    @click="editType(type)">
                                <font-awesome-icon icon="fa-solid fa-pen-to-square"/>
                            </button>
                            <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-r"
                                    @click="deleteType(type.id)">
                                <font-awesome-icon icon="fa-solid fa-trash"/>
                            </button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import {faMoon, faQuestion, faSun} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

export default {
    name: "TypesView",
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            types: [],
            selectedType: {},
        }
    }, async created() {
        await this.getTypes()
    },
    methods: {
        async getTypes() {
            const data = await fetch('http://localhost:3000/types')
            this.types = await data.json()

            for (const type of Object.values(this.types)) {
                let icon = await this.getIconForType(type)
                Object.assign(type, {"icon": icon})
            }
        },
        getIconForType(type) {
            switch (type.name) {
                case 'Chaos':
                    return faMoon
                case 'Halo':
                    return faSun
                default:
                    return faQuestion
            }
        },
        async deleteType(typeId) {
            await fetch(`http://localhost:3000/types/${typeId}`, {
                method: 'DELETE'
            })
            if (typeId === this.selectedType.id) {
                this.selectedType = {}
            }
            const index = this.types.findIndex(type => type.id === typeId);
            this.types.splice(index, 1);
        },
        async createOrUpdateType() {
            if (!this.selectedType.id) {
                await this.addType()
            } else {
                await this.updateType()
            }
            this.selectedType.name = "";
            this.selectedType = {};
        },
        async addType() {
            const response = await fetch('http://localhost:3000/types', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.selectedType.name,
                }),
            }).then(() => {
                this.selectedType.name = ""
                this.getTypes()
            });
        },
        async updateType() {
            const response = await fetch(`http://localhost:3000/types/${this.selectedType.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.selectedType.name,
                }),
            }).then(() => {
                this.getTypes()
            });
        },
        editType(type) {
            this.selectedType = {...type}
        },
    },
    mounted() {
        this.getTypes()
    }
}
</script>

<style scoped></style>
