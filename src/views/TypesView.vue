<template>
  <div class="about">
    <h1>Manage Types</h1>
  </div>
  <div class="types-items">
    <table>
      <tr>
        <th>Id</th>
        <th>Icon</th>
        <th>Name</th>
      </tr>
      <tr v-for="(type, index) in types" :key="index" class="type-item">
        <td>{{ type.id }}</td>
        <td>
          <font-awesome-icon :icon="type.icon" />
        </td>
        <td>{{ type.name }}</td>
        <td>
          <button>Edit</button>
          <button @click="deleteType(type.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: "TypesView",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      types: []
    }
  },
  methods: {
    async getTypes() {
      const data = await fetch('http://localhost:3000/types')
      const types = await data.json()
      this.types = types.map(type => {
        return {
          ...type,
          icon: this.getIconForType(type)
        }
      })
    },
    getIconForType(type) {
      switch (type.name) {
        case 'Chaos':
          return faMoon
        case 'Halo':
          return faSun
        default:
          return null // no icon for unknown types
      }
    },
    async deleteType(typeId) {
      await fetch(`http://localhost:3000/classes/${typeId}`, {
        method: 'DELETE'
      })
    }
  },
  mounted() {
    this.getTypes()
  },
  updated() {
    this.getTypes()
  }
}
</script>

<style scoped></style>
