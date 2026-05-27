import { useState } from 'react'
import { deleteExpense } from '../api'

function ExpenseItem({ expense, onDeleted }) {
  const [deleting, setDeleting] = useState(false)

  async function handleDelete() {
    setDeleting(true)
    try {
      await deleteExpense(expense.id)
      onDeleted()
    } catch {
      // error handled silently
    } finally {
      setDeleting(false)
    }
  }

  const date = new Date(expense.created_at).toLocaleDateString()

  return (
    <li className="expense-item">
      <div className="expense-info">
        <span className="expense-category">{expense.category}</span>
        <span className="expense-description">{expense.description || '—'}</span>
        <span className="expense-date">{date}</span>
      </div>
      <div className="expense-actions">
        <span className="expense-amount">${Number(expense.amount).toFixed(2)}</span>
        <button
          className="delete-btn"
          onClick={handleDelete}
          disabled={deleting}
        >
          {deleting ? '...' : '×'}
        </button>
      </div>
    </li>
  )
}

export default ExpenseItem
