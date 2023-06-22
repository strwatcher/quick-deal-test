<script setup lang="ts">
import TaskForm from '@/components/TaskForm.vue'
import TasksList from '@/components/TasksList.vue'
</script>

<template>
  <main class="tasks-view">
    <TaskForm />
    <TasksList />
  </main>
</template>

<style scoped>
.tasks-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
</style>
