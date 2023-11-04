import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

const AddBudgetForm = () => {
    const fetcher = useFetcher()
    const isSubmitting = fetcher.state === "submitting"
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
            <h2 className="h3">
                建立支出項目
            </h2>
            <fetcher.Form method="post" className="grid-sm" ref={formRef}>
                <div className="grid-xs">
                    <label htmlFor="newBudget">項目名稱</label>
                    <input type="text" name='newBudget' id="newBudget" placeholder="生活用品、交通花費..." required ref={focusRef} />
                </div>
                <div className="grid-xs">
                    <label htmlFor="newBudgetAmount">數量</label>
                    <input type="number" step={0.01} name="newBudgetAmount" id="ewBudgetAmount" placeholder="請輸入數量" required inputMode="decimal" />
                </div>
                <input type="hidden" name='_action' value='createBudget' />
                <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
                    {
                        isSubmitting ? <span>建立中..</span> :
                            <>
                                <span>建立帳款</span>
                                <CurrencyDollarIcon width={20}></CurrencyDollarIcon>
                            </>
                    }
                </button>
            </fetcher.Form>
        </div>
    );
};

export default AddBudgetForm;