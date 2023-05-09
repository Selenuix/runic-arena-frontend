<!--<template>
    <div class="cards-container">
        <h1>Manage Cards</h1>
        <RouterLink to="/cards/new">Add</RouterLink>
        <div class="cards-items">
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Power</th>
                    <th>Type</th>
                    <th>Class</th>
                    <th>Actions</th>
                </tr>
                <tr v-for="(card, index) in cards" :key="index" class="card-item">
                    <td>{{ card.id }}</td>
                    <td>{{ card.name }}</td>
                    <td>
                        <img :src="'http://localhost:3000/cards/' + card.id + '/image'" alt="Card image">
                    </td>
                    <td>{{ card.power }}</td>
                    <td>
                        <font-awesome-icon :icon="card.type.icon"/>
                        {{ card.type.name }}
                    </td>
                    <td>
                        <font-awesome-icon :icon="card.class.icon"/>
                        {{ card.class.name }}
                    </td>
                    <td>
                        <RouterLink :to="{name: 'card-edit', params: {id: card.id}}">Edit</RouterLink>
                        <button @click="deleteCard(card.id)">Delete</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>-->
<template>
    <!--<div class="cards-container">
        <h1>Manage Cards</h1>
        
        <div class="cards-items">
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Power</th>
                    <th>Type</th>
                    <th>Class</th>
                    <th>Actions</th>
                </tr>
                <tr v-for="(card, index) in cards" :key="index" class="card-item">
                    <td>{{ card.id }}</td>
                    <td>{{ card.name }}</td>
                    <td>
                        <img :src="'http://localhost:3000/cards/' + card.id + '/image'" alt="Card image">
                    </td>
                    <td>{{ card.power }}</td>
                    <td>
                        <font-awesome-icon :icon="card.type.icon" />
                        {{ card.type.name }}
                    </td>
                    <td>
                        <font-awesome-icon :icon="card.class.icon" />
                        {{ card.class.name }}
                    </td>
                    <td>
                        <RouterLink :to="{ name: 'card-edit', params: { id: card.id } }"><font-awesome-icon
                                icon="fa-solid fa-pen-to-square" /></RouterLink>
                        <button @click="deleteCard(card.id)"><font-awesome-icon icon="fa-solid fa-trash" /></button>
                    </td>
                </tr>
            </table>
        </div>
    </div>-->
    <div class="about">
        <RouterLink to="/cards/new">Add</RouterLink>
        <h1 class="text-2xl font-bold text-left py-2">Manage Card</h1>
        <div class="flex justify-center items-end space-x-3 mb-4">
            <div>
                <h2>Name</h2>
                <input type="text" class="border border-gray-500 px-3 py-2">
            </div>
            <div>
                <h2>Power</h2>
                <input type="text" class="border border-gray-500 px-3 py-2">
            </div>
            <div>
                <button class="bg-gray-600 text-white py-2 px-3 hover:bg-gray-500"
                    @click="createOrUpdateCard(selectedCard)">Save</button>
            </div>
        </div>
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
                        <th scope="col" class="py-3 px-6 text-right text-lg">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(card, index) in cards" :key="index"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ card.id }}
                        </th>
                        <td class="py-4 px-6">
                        <td>
                            <img :src="'http://localhost:3000/cards/' + card.id + '/image'" alt="Card image">
                        </td>
                        </td>
                        <td class="py-4 px-6">
                            {{ card.name }}
                        </td>
                        <td class="py-4 px-6">
                            {{ card.power }}
                        </td>
                        <td>
                            <font-awesome-icon :icon="card.type.icon" />
                            {{ card.type.name }}
                        </td>
                        <td>
                            <font-awesome-icon :icon="card.class.icon" />
                            {{ card.class.name }}
                        </td>
                        <td class="py-4 px-6 text-right">
                            <div class="inline-flex">
                                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-l"
                                    @click="editCard(card)"><font-awesome-icon icon="fa-solid fa-pen-to-square" /></button>

                                <button class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4"
                                    @click="getCard(card.id)"> <font-awesome-icon icon="fa-solid fa-eye" />
                                </button>
                                <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-r"
                                    @click="deleteCard(card.id)"> <font-awesome-icon icon="fa-solid fa-trash" />
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
import {
    faBullseye,
    faHatWizard,
    faMoon,
    faShield,
    faStaffSnake,
    faSun,
    faUserNinja
} from "@fortawesome/free-solid-svg-icons";

export default {
    name: "CardsView",
    data() {
        return {
            cards: []
        }
    },
    methods: {
        async getCards() {
            const data = await fetch('http://localhost:3000/cards')
            this.cards = await data.json()

            for (const card of Object.values(this.cards)) {
                let icon = await this.getIconForType(card.type)
                let archetypeIcon = await this.getIconForArchetype(card.class)

                Object.assign(card.type, { "icon": icon });
                Object.assign(card.class, { "icon": archetypeIcon });
            }
        },

        async getIconForType(type) {
            switch (type.name) {
                case 'Chaos':
                    return faMoon
                case 'Halo':
                    return faSun
                default:
                    return null // icon for unknown types
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
                    return null // icon for unknown types
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
    }
}
</script>

<style scoped></style>
