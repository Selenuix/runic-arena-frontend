<template>
    <div class="about">
        <h1>Manage Classes</h1>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <RouterLink to="/classes/new">Add</RouterLink>
        <div class="pb-4 bg-white dark:bg-gray-900">
            <label class="sr-only" for="table-search">Search</label>
            <div class="relative mt-1">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              fill-rule="evenodd"></path>
                    </svg>
                </div>
                <input id="table-search"
                       class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Search for items"
                       type="text">
            </div>
        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th class="px-6 py-3" scope="col">
                    Id
                </th>
                <th class="px-6 py-3" scope="col">
                    Name
                </th>
                <th class="px-6 py-3" scope="col">
                    Actions
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(archetype, index) in archetypes" :key="index"
                class=" type-item bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" scope="row">
                    {{ archetype.id }}
                </th>
                <td class="px-6 py-4">
                    <font-awesome-icon :icon="archetype.icon"/>
                    {{ archetype.name }}
                </td>
                <td class="px-6 py-4">
                    <RouterLink :to="{ name: 'class-edit', params: { id: archetype.id } }"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Edit
                    </RouterLink>
                    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            @click="deleteArchetype(archetype.id)">
                        Delete
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
        <nav aria-label="Table navigation" class="flex items-center justify-between pt-4">
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span
                    class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span
                    class="font-semibold text-gray-900 dark:text-white">1000</span></span>
            <ul class="inline-flex items-center -space-x-px">
                <li>
                    <a class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                       href="#">
                        <span class="sr-only">Previous</span>
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd"
                                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                  fill-rule="evenodd"></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                       href="#">1</a>
                </li>
                <li>
                    <a class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                       href="#">2</a>
                </li>
                <li>
                    <a aria-current="page"
                       class="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                       href="#">3</a>
                </li>
                <li>
                    <a class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                       href="#">...</a>
                </li>
                <li>
                    <a class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                       href="#">100</a>
                </li>
                <li>
                    <a class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                       href="#">
                        <span class="sr-only">Next</span>
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  fill-rule="evenodd"></path>
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  <!--    <div class="archetypes-items">-->
  <!--        <RouterLink to="/types/new">Add</RouterLink>-->
  <!--        <table>-->
  <!--            <tr>-->
  <!--                <th>Id</th>-->
  <!--                <th>Icon</th>-->
  <!--                <th>Name</th>-->
  <!--            </tr>-->
  <!--            <tr v-for="(archetype, index) in archetypes" :key="index" class="archetype-item">-->
  <!--                <td>{{ archetype.id }}</td>-->
  <!--                <td>-->
  <!--                    <font-awesome-icon :icon="archetype.icon"/>-->
  <!--                </td>-->
  <!--                <td>{{ archetype.name }}</td>-->
  <!--                <td>-->
  <!--                    <RouterLink :to="{name: 'class-edit', params: {id: archetype.id}}">Edit</RouterLink>-->
  <!--                    <button @click="deleteArchetype(archetype.id)">Delete</button>-->
  <!--                </td>-->
  <!--            </tr>-->
  <!--        </table>-->
  <!--    </div>-->
</template>

<script>
import {faBullseye, faHatWizard, faShield, faStaffSnake, faUserNinja} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

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
                Object.assign(archetype, {"icon": icon})
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
                    return null // no icon for unknown types
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
