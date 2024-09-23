import Environment from '@/config/env'
import axios, { AxiosInstance } from 'axios'

function getAPIClient(): AxiosInstance {
   const api = axios.create({
      baseURL: Environment.VITE_API_URL,
   })

   return api
}

export const api = getAPIClient()
