const BASE_URL = '/api'

export async function getExpenses(category) {
  const params = category ? `?category=${encodeURIComponent(category)}` : ''
  const res = await fetch(`${BASE_URL}/expenses${params}`)
  if (!res.ok) throw new Error('Failed to fetch expenses')
  return res.json()
}

export async function createExpense(expense) {
  const res = await fetch(`${BASE_URL}/expenses`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(expense),
  })
  if (!res.ok) throw new Error('Failed to create expense')
  return res.json()
}

export async function deleteExpense(id) {
  const res = await fetch(`${BASE_URL}/expenses/${id}`, {
    method: 'DELETE',
  })
  if (!res.ok) throw new Error('Failed to delete expense')
  return res.json()
}
