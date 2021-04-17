<template>
  <ul>
    <li v-for="todo in todos" :key="todo.text">
      <input :checked="todo.done" type="checkbox" @change="toggle(todo)" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
    <li>
      <input placeholder="What needs to be done?" @keyup.enter="addTodo" />
    </li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    todos() {
      return this.$store.state.todos.list
    },
  },
  methods: {
    addTodo(e) {
      console.log(e.target.value)
      this.$store.commit('todos/add', e.target.value)
      console.log(e.target)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle',
    }),
  },
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
