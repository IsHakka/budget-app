export const waait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 800));

// 隨機顏色
const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLength * 34} 65% 50%`;
};


export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// 獲取本地資料渲染
export const getAllMatchingItems = ({ category, key, value }) => {
  const data = fetchData(category) ?? [];
  return data.filter((item) => item[key] === value);
};

// 從本地刪除資料
export const deleteItem = ({ key, id }) => {
  const existingData = fetchData(key);
  if (id) {
    const newData = existingData.filter((item) => item.id !== id);
    return localStorage.setItem(key, JSON.stringify(newData));
  }
  return localStorage.removeItem(key);
};

// 創建生活費
export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
  };
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem])
  );
};

// 創建支出
export const createExpense = ({ name, amount, budgetId }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId: budgetId,
  };
  const existingExpenses = fetchData("expenses") ?? [];
  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newItem])
  );
};


export const calculateSpentByBudget = (budgetId) => {
  const expenses = fetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce((acc, expense) => {
    // 檢查輸入的費用===生活費?
    if (expense.budgetId !== budgetId) return acc;

    // 將金額加入總額
    return (acc += expense.amount);
  }, 0);
  return budgetSpent;
};

// 時間設定
export const formatDateToLocaleString = (epoch) =>
  new Date(epoch).toLocaleDateString();

// 百分比設定
export const formatPercentage = (amt) => {
  return amt.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
};

// 金額呈現設定
export const formatCurrency = (amt) => {
  return amt.toLocaleString(undefined, {
    currency: "TWD",
  });
};
