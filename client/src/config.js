// Imports
import axios from 'axios'
import router from './router'

// Exports
export const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT
export const API_URL = import.meta.env.VITE_API_URL

// Axios
export const HTTP = axios.create({ baseURL: API_URL })
export const interceptRoutes = HTTP.interceptors.response.use(
  async (response) => response
)
