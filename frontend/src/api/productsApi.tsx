import axios from 'axios'
import { API_SERVER_HOST } from './todoApi'

const host = `${API_SERVER_HOST}/api/products`

export const getList = async (pageParam: PageParam) => {
  const res = await axios.get(`${host}/list`, { params: pageParam })
  return res.data
}

export const getOne = async (pno: number) => {
  const res = await axios.get(`${host}/${pno}`)
  return res.data
}

export const postAdd = async (product: FormData) => {
  const header = { headers: { 'Content-Type': 'multipart/form-data' } }
  const res = await axios.post(`${host}/`, product, header)
  return res.data
}
