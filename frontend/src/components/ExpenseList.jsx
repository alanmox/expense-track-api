import { useState, useEffect, useCallback } from 'react'
import { getExpenses } from '../api'
import ExpenseItem from './ExpenseItem'

function ExpenseList({ categoryFilter = '' }) {
  const [expenses, setExpenses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchExpenses = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const data = await getExpenses(categoryFilter)
      setExpenses(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [categoryFilter])

  useEffect(() => {
    fetchExpenses()
  }, [fetchExpenses])

  function handleDeleted() {
    fetchExpenses()
  }

  if (loading) return <p className="loading">Loading...</p>
  if (error) return <p className="error">{error}</p>
  if (expenses.length === 0) return <p className="empty">No expenses found.</p>

  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDeleted={handleDeleted}
        />
      ))}
    </ul>
  )
}

export default ExpenseList
