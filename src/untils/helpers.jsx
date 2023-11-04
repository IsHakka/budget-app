// 獲取本地登入帳號
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

// 登出刪除本地帳號
export const deleteItem = ({ key }) => {
    return localStorage.removeItem(key)
}