<template>
  <div>
    <h1> To uppercase</h1>
    <input v-model.trim="uppercaseInput" type="text" placeholder="Type something..." />
    <p v-if="uppercaseInput"><b>uppercase Version: </b>{{ uppercaseInput.toLocaleUpperCase() }}</p>
  </div>

  <div class="todo-app">
    <h1>ToDo App</h1>
    <form @submit.prevent="createToDo" class="todo-form">
      <input v-model="data.todo" type="text" placeholder="Add a new task..." required />
      <input v-model="data.color" type="color">
      <input type="submit" value="Add" class="submit-btn" />
    </form>

    <ul class="todo-list">
      <li v-for="(todo, index) in data.todos" :key="index" class="todo-item">
        <div class="todo-color" :style="{ backgroundColor: todo.color }"></div>
        <input v-if="todo.isEditing" v-model="todo.name" type="text">
        <div v-else>
          <del v-if="todo.isCompleted">{{ todo.name }}</del>
          <span v-else>{{ todo.name }}</span>
        </div>
        <div class="button-group">
          <button @click="deleteTodo(index)" class="delete-btn">Delete</button>
          <button @click="completeToDo(index)" class="complete-btn">Complete</button>
          <button @click="todo.isEditing = !todo.isEditing" class="edit-btn">{{ todo.isEditing ? 'Save' : 'Edit'
            }}</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { computed, reactive, ref } from 'vue';

const data = reactive({
  todos: [],
  todo: '',
  color: '#ff0000'
})

const uppercaseInput = ref("")


function createToDo() {
  if (data.todo.trim()) {
    data.todos.push({
      name: data.todo,
      isCompleted: false,
      isEditing: false,
      color: data.color
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
