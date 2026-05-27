import ExpenseItem from './ExpenseItem'

function ExpenseList({ expenses, onDeleted }) {
  if (expenses.length === 0) {
    return <p className="empty">No expenses found.</p>
  }

  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDeleted={onDeleted}
        />
      ))}
    </ul>
  )
}

export default ExpenseList
