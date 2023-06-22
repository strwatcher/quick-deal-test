import { defineStore } from 'pinia'
import { useTasksStore } from './tasks'

export const useTaskForm = defineStore('task-form', {
  state: () => ({
    text: '',
    error: ''
  }),
  actions: {
    save() {
      const tasks = useTasksStore()

      if (!this.text) {
        this.error = 'Введите значение в это поле'
        return
      }

      tasks.add({ text: this.text })
      this.text = ''
    },

    change() {
      this.error = ''
    }
  }
})
