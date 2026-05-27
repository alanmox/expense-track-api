import { useState, useCallback } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseFilter from './components/ExpenseFilter'
import ExpenseList from './components/ExpenseList'
import './App.css'

function App() {
  const [categoryFilter, setCategoryFilter] = useState('')
  const [refreshKey, setRefreshKey] = useState(0)

  const triggerRefresh = useCallback(() => {
    setRefreshKey((k) => k + 1)
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        <h1>Expense Tracker</h1>
      </header>

      <main className="app-main">
        <ExpenseForm onSuccess={triggerRefresh} />
        <ExpenseFilter
          current={categoryFilter}
          onChange={setCategoryFilter}
        />
        <ExpenseList
          key={refreshKey}
          categoryFilter={categoryFilter}
        />
      </main>
    </div>
  )
}

export default App
