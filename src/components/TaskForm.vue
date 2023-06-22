<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTaskForm } from '../stores/task-form'
const store = useTaskForm()
const { text, error } = storeToRefs(store)
</script>

<template>
  <form class="form" @submit.prevent="store.save">
    <label :class="{ 'form-input-wrapper': true, 'form-input-wrapper-error': error }">
      Добавить задачу
      <input
        :class="{
          'form-input': true,
          'form-input-error': error
        }"
        type="text"
        v-model="text"
        @input="store.change"
      />
      <div v-if="error" class="form-input-error">{{ error }}</div>
    </label>
    <button class="form-submit" type="submit">Создать</button>
  </form>
</template>

<style scoped lang="scss">
.form {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.form-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  &-error {
    color: red;
  }
}

.form-input {
  font-size: 1.2em;
  padding: 0.25rem;
  border: 1px solid black;
  color: black;
  border-radius: 0.25rem;
  outline: none;

  &-error {
    border-color: red;
    color: red;
  }

  &:focus {
    outline: 1px solid rgba(0, 0, 0, 0.5);
  }
}

.form-submit {
  font-size: 1.2em;

  outline: none;
  border: none;

  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  border: 1px solid black;
  background-color: white;

  cursor: pointer;
}
</style>
