import { useState, useEffect, useCallback } from 'react'
import { getExpenses } from './api'
import ExpenseForm from './components/ExpenseForm'
import ExpenseFilter from './components/ExpenseFilter'
import ExpenseList from './components/ExpenseList'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([])
  const [categoryFilter, setCategoryFilter] = useState('')
  const [error, setError] = useState('')

  const loadExpenses = useCallback(async () => {
    try {
      setError('')
      const data = await getExpenses(categoryFilter)
      setExpenses(data)
    } catch (err) {
      setError(err.message)
    }
  }, [categoryFilter])

  useEffect(() => {
    loadExpenses()
  }, [loadExpenses])

  function onExpenseAdded() {
    loadExpenses()
  }

  function onExpenseDeleted() {
    loadExpenses()
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Expense Tracker</h1>
      </header>

      <main className="app-main">
        <ExpenseForm onSuccess={onExpenseAdded} />
        <ExpenseFilter
          current={categoryFilter}
          onChange={setCategoryFilter}
        />
        {error && <p className="error">{error}</p>}
        <ExpenseList
          expenses={expenses}
          onDeleted={onExpenseDeleted}
        />
      </main>
    </div>
  )
}

export default App
