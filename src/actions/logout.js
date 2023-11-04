import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteItem } from "../helpers";

export async function logoutAction() {
  // 刪除用戶、清空資料
  deleteItem({
    key: "userName"
  })
  deleteItem({
    key: "budgets"
  })
  deleteItem({
    key: "expenses"
  })
  toast.success("刪除成功")
  // 回主頁
  return redirect("/")
}