import { defineStore } from 'pinia'

export const index = defineStore('index', {
    state: () => ({
        darkMode: true
    }),
    actions: {
        setMode(){
            this.darkMode = !this.darkMode
        }
    },
    getters: {

    }
})