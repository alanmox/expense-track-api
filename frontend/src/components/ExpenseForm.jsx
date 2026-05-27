import { useState } from 'react'
import { createExpense } from '../api'

const CATEGORIES = [
  'Food',
  'Transport',
  'Entertainment',
  'Housing',
  'Utilities',
  'Healthcare',
  'Shopping',
  'Other',
]

function ExpenseForm({ onSuccess }) {
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState(CATEGORIES[0])
  const [description, setDescription] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!amount || isNaN(amount) || Number(amount) <= 0) return

    setSubmitting(true)
    try {
      await createExpense({
        amount: Number(amount),
        category,
        description,
      })
      setAmount('')
      setCategory(CATEGORIES[0])
      setDescription('')
      onSuccess()
    } catch {
      // error handled silently
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          step="0.01"
          min="0.01"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          placeholder="Optional note"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit" disabled={submitting}>
        {submitting ? 'Adding...' : 'Add Expense'}
      </button>
    </form>
  )
}

export default ExpenseForm
