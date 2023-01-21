import axios from 'axios'
import { HTTP, API_URL } from '@/config.js'
import Queries from '@/utilities/apiQueries.json'
// import { useAuth } from '@/stores/auth'

// const auth = useAuth()
export const apiCalls = {
  getMenus() {
    // Auth Register User
    return axios.get(`${API_URL}${Queries.menu.getMenu}`)
  },
}
