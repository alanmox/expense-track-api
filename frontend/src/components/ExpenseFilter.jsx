const CATEGORIES = [
  '',
  'Food',
  'Transport',
  'Entertainment',
  'Housing',
  'Utilities',
  'Healthcare',
  'Shopping',
  'Other',
]

function ExpenseFilter({ current, onChange }) {
  return (
    <div className="expense-filter">
      <label htmlFor="filter">Filter by category:</label>
      <select
        id="filter"
        value={current}
        onChange={(e) => onChange(e.target.value)}
      >
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>{c || 'All'}</option>
        ))}
      </select>
    </div>
  )
}

export default ExpenseFilter
