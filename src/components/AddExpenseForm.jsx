import { useEffect, useRef } from "react"
import { useFetcher } from "react-router-dom"
import { PlusCircleIcon } from "@heroicons/react/24/solid"

const AddExpenseForm = ({ budgets }) => {
  const fetcher = useFetcher()
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef()
  const focusRef = useRef()

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset()
      focusRef.current.focus()
    }

  }, [isSubmitting])

  return (
    <div className="form-wrapper">
      <h2 className="h3">新增<span className="accent">
        {budgets.length === 1 && `${budgets.map((budg) => budg.name)}`}
      </span>
        支出
      </h2>
      <fetcher.Form
        method="post"
        className="grid-sm"
        ref={formRef}
      >
        <div className="expense-inputs">
          <div className="grid-xs">
            <label htmlFor="newExpense">支出名稱</label>
            <input
              type="text"
              name="newExpense"
              id="newExpense"
              placeholder="請輸入支出名稱"
              ref={focusRef}
              required
            />
          </div>
          <div className="grid-xs">
            <label htmlFor="newExpenseAmount">金額</label>
            <input
              type="number"
              step="10"
              inputMode="decimal"
              name="newExpenseAmount"
              id="newExpenseAmount"
              placeholder="請輸入金額"
              required
            />
          </div>
        </div>
        <div className="grid-xs" hidden={budgets.length === 1}>
          <label htmlFor="newExpenseBudget">生活費(由此扣除)</label>
          <select name="newExpenseBudget" id="newExpenseBudget" required>
            {
              budgets
                .sort((a, b) => a.createdAt - b.createdAt)
                .map((budget) => {
                  return (
                    <option key={budget.id} value={budget.id}>
                      {budget.name}
                    </option>
                  )
                })
            }
          </select>
        </div>
        <input type="hidden" name="_action" value="createExpense" />
        <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
          {
            isSubmitting ? <span>建立中...</span> : (
              <>
                <span>新增</span>
                <PlusCircleIcon width={20} />
              </>
            )
          }
        </button>
      </fetcher.Form>
    </div>
  )
}
export default AddExpenseForm