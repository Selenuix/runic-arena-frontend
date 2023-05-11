<template>
    <div class="about">
        <RouterLink to="/cards/new">Add</RouterLink>
        <h1 class="text-2xl font-bold text-left py-2">Manage Card</h1>

        <div class="overflow-x-auto relative sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                <tr>
                    <th scope="col" class="py-3 px-6 text-lg">
                        Id
                    </th>
                    <th scope="col" class="py-3 px-6 text-lg">
                        Images
                    </th>
                    <th scope="col" class="py-3 px-6 text-lg">
                        Names
                    </th>
                    <th scope="col" class="py-3 px-6 text-lg">
                        Power
                    </th>
                    <th scope="col" class="py-3 px-6 text-lg">
                        Types
                    </th>
                    <th scope="col" class="py-3 px-6 text-lg">
                        Classes
                    </th>
                    <th scope="col" class="py-3 px-6 text-lg">
                        Passive Capability
                    </th>
                    <th scope="col" class="py-3 px-6 text-lg">
                        Active Capabilities
                    </th>
                    <th scope="col" class="py-3 px-6 text-right text-lg">
                        Actions
                    </th>
                </tr>
                </thead>
                <tbody class="text-center">
                <tr v-for="(card, index) in paginatedCards" :key="index"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ card.id }}
                    </th>
                    <td class="py-4 px-6">
                        <img :src="'http://localhost:3000/cards/' + card.id + '/image'" alt="Card image">
                    </td>
                    <td class="py-4 px-6">
                        {{ card.name }}
                    </td>
                    <td class="py-4 px-6">
                        {{ card.power }}
                    </td>
                    <td>
                        <font-awesome-icon :icon="card.type.icon"/>
                        {{ card.type.name }}
                    </td>
                    <td>
                        <font-awesome-icon :icon="card.class.icon"/>
                        {{ card.class.name }}
                    </td>
                    <td>
                        {{ card.passive_capability.name }}
                    </td>
                    <td>
                        <p v-for="(capabilities, key) in card.active_capabilities">
                            {{ capabilities.active_capability.name }}
                        </p>
                    </td>
                    <td class="py-4 px-6 text-right">
                        <div class="inline-flex">
                            <RouterLink class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-l"
                                        :to="{name: 'card-edit', params: {id: card.id}}">
                                <font-awesome-icon icon="fa-solid fa-pen-to-square"/>
                            </RouterLink>

                            <button class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4"
                                    @click="getCard(card.id)">
                                <font-awesome-icon icon="fa-solid fa-eye"/>
                            </button>
                            <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-r"
                                    @click="deleteCard(card.id)">
                                <font-awesome-icon icon="fa-solid fa-trash"/>
                            </button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
            <nav v-if="cards.length > 3" class="flex justify-between my-4">
                <button :disabled="pagination.page === 1" @click="pagination.page--">Previous</button>
                <button :disabled="pagination.page === pageCount" @click="pagination.page++">Next</button>
            </nav>
        </div>
    </div>
</template>

<script>
import {
    faBullseye,
    faHatWizard,
    faMoon,
    faQuestion,
    faShield,
    faStaffSnake,
    faSun,
    faUserNinja
} from "@fortawesome/free-solid-svg-icons";

export default {
    name: "CardsView",
    data() {
        return {
            cards: [],
            pagination: {
                page: 1,
                perPage: 3
            }
        }
    },
    methods: {
        async getCards() {
            const data = await fetch('http://localhost:3000/cards')
            this.cards = await data.json()

            console.log(this.cards[0].active_capabilities[0].active_capability.name)

            for (const card of Object.values(this.cards)) {
                let icon = await this.getIconForType(card.type)
                let archetypeIcon = await this.getIconForArchetype(card.class)

                Object.assign(card.type, {"icon": icon});
                Object.assign(card.class, {"icon": archetypeIcon});
            }
        },

        async getIconForType(type) {
            switch (type.name) {
                case 'Chaos':
                    return faMoon
                case 'Halo':
                    return faSun
                default:
                    return faQuestion // icon for unknown types
            }
        },
        async getIconForArchetype(archetype) {
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
        async deleteCard(cardId) {
            await fetch(`http://localhost:3000/cards/${cardId}`, {
                method: 'DELETE'
            }).then(() => {
                this.getCards()
            })
        },
    },

    async mounted() {
        await this.getCards()
    },
    computed: {
        paginatedCards() {
            const startIndex = (this.pagination.page - 1) * this.pagination.perPage
            const endIndex = startIndex + this.pagination.perPage
            return this.cards.slice(startIndex, endIndex)
        },
        pageCount() {
            return Math.ceil(this.cards.length / this.pagination.perPage)
        }
    }

}
</script>

<style scoped>
</style>
