<template>
  <div class="todo-app">
    <h1>ToDo App</h1>
    <form @submit.prevent="createToDo" class="todo-form">
      <input v-model="data.todo" type="text" placeholder="Add a new task..." required />
      <input type="submit" value="Add" class="submit-btn" />
    </form>

    <ul class="todo-list">
      <li v-for="(todo, index) in data.todos" :key="index" class="todo-item">
        <del v-if="todo.isCompleted">{{ todo.name }}</del>
        <span v-else>{{ todo.name }}</span>
        <div class="button-group">
          <button @click="deleteTodo(index)" class="delete-btn">Delete</button>
          <button @click="completeToDo(index)" class="complete-btn">Complete</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { reactive } from 'vue';

const data = reactive({
  todos: [],
  todo: ''
})

function createToDo() {
  if (data.todo.trim()) {
    data.todos.push({
      name: data.todo,
      isCompleted: false
    })
    data.todo = ''
  }
}

function deleteTodo(index) {
  data.todos.splice(index, 1)
}

function completeToDo(index) {
  data.todos[index].isCompleted = true
}
</script>
