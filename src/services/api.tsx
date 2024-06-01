import axios, { AxiosInstance } from 'axios'

function getAPIClient(): AxiosInstance {
   const api = axios.create({
      // baseURL: process.env.PUBLIC_API_URL,
      baseURL: 'https://jsonplaceholder.org',
   })

   return api
}

export const api = getAPIClient()
