import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
})

function extractMessage(err) {
  if (err.response?.data?.error) return err.response.data.error
  return 'Something went wrong'
}

export async function getExpenses(category) {
  try {
    const params = category ? { category } : {}
    const res = await api.get('/expenses', { params })
    return res.data
  } catch (err) {
    throw new Error(extractMessage(err))
  }
}

export async function createExpense(expense) {
  try {
    const res = await api.post('/expenses', expense)
    return res.data
  } catch (err) {
    throw new Error(extractMessage(err))
  }
}

export async function deleteExpense(id) {
  try {
    const res = await api.delete(`/expenses/${id}`)
    return res.data
  } catch (err) {
    throw new Error(extractMessage(err))
  }
}
