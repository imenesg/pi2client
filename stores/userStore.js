import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    const user = JSON.parse(sessionStorage.getItem('user') ) || ref({})
    
    function setUser(userInfo){
    sessionStorage.setItem('user', JSON.stringify(userInfo))
     user.value = userInfo
    }
    function clearUser(){
    user.value = {}
    sessionStorage.removeItem('user')
    }

    return { user, clearUser, setUser }

})