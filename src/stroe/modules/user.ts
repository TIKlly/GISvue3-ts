import { defineStore } from 'pinia'
import piniaPersistConfig from '../helper/persist'



export const useUserStore = defineStore('user', {
    state: () => {
        return {

            token: '',
            userInfo: {
                name: "会游泳的🐟"
            }
        }
    },
    actions: {
        setToken(token: string) {
            this.token = token
        },
        updateName(name: string) {
            this.userInfo.name = name
        },
    },
    persist: piniaPersistConfig("tik-user")
})