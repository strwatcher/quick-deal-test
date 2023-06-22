<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks'
import { storeToRefs } from 'pinia'
import TaskItem from './TaskItem.vue'

const store = useTasksStore()
const { tasks } = storeToRefs(store)
</script>

<template>
  <template v-for="item in tasks" :key="item.id">
    <TaskItem
      :text="item.text"
      :checked="item.checked"
      :id="item.id"
      :on-delete="store.delete"
      :on-edit="store.editTask"
      :on-check="store.checkTask"
    />
  </template>
</template>
