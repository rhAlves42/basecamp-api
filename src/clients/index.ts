import axios, { AxiosInstance } from "axios";


export default async (token: string, basecampId: string): Promise<AxiosInstance> => {

  const axiosInstance = axios.create({
    baseURL: `${process.env.BASECAMP_BASE_URL}/${basecampId}`,
  })

  axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`
    return config
  }, null)


  return axiosInstance;
}