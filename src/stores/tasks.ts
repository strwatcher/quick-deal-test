import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'
import type { TaskData } from '@/shared/task'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [] as TaskData[]
  }),
  actions: {
    add({ text }: Pick<TaskData, 'text'>) {
      console.log(text)
      this.tasks.push({ id: uuid(), text, checked: false })
    },

    delete({ id }: Pick<TaskData, 'id'>) {
      this.tasks = this.tasks.filter((task) => id !== task.id)
    },

    checkTask({ checked, id }: Pick<TaskData, 'checked' | 'id'>) {
      this.tasks = this.tasks.map((task) => {
        if (task.id !== id) return task
        return { ...task, checked }
      })
    },

    editTask({ text, id }: Pick<TaskData, 'text' | 'id'>) {
      this.tasks = this.tasks.map((task) => {
        if (task.id !== id) return task
        return { ...task, text }
      })
    }
  },
  persist: true
})
