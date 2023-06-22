<script setup lang="ts">
import type { TaskData } from '@/shared/task'

defineProps<
  TaskData & {
    onDelete: ({ id }: Pick<TaskData, 'id'>) => void
    onEdit: ({ id, text }: Pick<TaskData, 'id' | 'text'>) => void
    onCheck: ({ id, checked }: Pick<TaskData, 'id' | 'checked'>) => void
  }
>()
</script>
<template>
  <article class="task">
    <input
      type="text"
      :value="text"
      @change="onEdit({ id, text: ($event.target as HTMLInputElement).value })"
      :class="{ input: true, 'input-done': checked }"
    />
    <div class="controls">
      <button @click="onDelete({ id })" class="delete-button">X</button>
      <input
        type="checkbox"
        :checked="checked"
        class="checkbox"
        @change="onCheck({ id, checked: ($event.target as HTMLInputElement).checked })"
      />
    </div>
  </article>
</template>

<style scoped lang="scss">
.task {
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #eee;
}

.input {
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 1.4em;

  &-done {
    text-decoration: line-through;
  }
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.checkbox {
  margin: 0;
  aspect-ratio: 1;
  height: 1.5rem;
  cursor: pointer;
}

.delete-button {
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background-color: red;
  color: white;
  font-weight: 600;
  height: 1.5rem;

  aspect-ratio: 1;

  border-radius: 0.25rem;
  cursor: pointer;
}
</style>
