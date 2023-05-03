<template>
    <div class="about">
        <h1 class="text-2xl font-bold text-left py-2">Manage Types</h1>
        <div class="flex justify-center items-end space-x-3">
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
                    <tr v-for="(type, index) in types" :key="index"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ type.id }}
                        </th>
                        <td class="py-4 px-6">
                            <font-awesome-icon :icon="type.icon" />
                        </td>
                        <td class="py-4 px-6">
                            {{ type.name }}
                        </td>
                        <td class="py-4 px-6 text-right">
                            <div class="inline-flex">
                                <!--<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-l"> Edit
                                </button>-->
                                <RouterLink :to="{ name: 'type-edit', params: { id: type.id } }"
                                    class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-l">Edit
                                </RouterLink>
                                <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-r"
                                    @click="deleteType(type.id)"> Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <RouterLink to="/types/new">Add</RouterLink>
</template>

<script>
import { faMoon, faQuestion, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    name: "TypesView",
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            types: [],
            name: "",
        }
    },
    methods: {
        async getTypes() {
            const data = await fetch('http://localhost:3000/types')
            this.types = await data.json()

            for (const type of Object.values(this.types)) {
                let icon = await this.getIconForType(type)
                Object.assign(type, { "icon": icon })
            }
        },
        getIconForType(type) {
            switch (type.name) {
                case 'Chaos':
                    return faMoon
                case 'Halo':
                    return faSun
                default:
                    return faQuestion // no icon for unknown types
            }
        },
        async deleteType(typeId) {
            await fetch(`http://localhost:3000/types/${typeId}`, {
                method: 'DELETE'
            }).then(() => {
                this.getTypes()
            })
        },
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
    },
    mounted() {
        this.getTypes()
    }
}
</script>

<style scoped></style>
