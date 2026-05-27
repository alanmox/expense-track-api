import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
})

export async function getExpenses(category) {
  const params = category ? { category } : {}
  const res = await api.get('/expenses', { params })
  return res.data
}

export async function createExpense(expense) {
  const res = await api.post('/expenses', expense)
  return res.data
}

export async function deleteExpense(id) {
  const res = await api.delete(`/expenses/${id}`)
  return res.data
}
