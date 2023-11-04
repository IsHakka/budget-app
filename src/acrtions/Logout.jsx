import { redirect } from "react-router-dom";
import { deleteItem } from "../untils/helpers";
import {toast} from 'react-toastify'

export async function logoutAction() {
    deleteItem({
        key: 'userName'
    })
    toast.success('已成功登出!')
    return redirect('/')

}