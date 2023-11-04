import { useLoaderData } from "react-router-dom";
import { fetchData } from "../untils/helpers";
import Intro from "../components/Intro";
import { toast } from "react-toastify";

// 抓數據
export function dashboardLoader() {
    const userName = fetchData('userName')
    return {
        userName
    }
}

export async function dashboardAction({ request }) {
    const data = await request.formData();
    const formData = Object.fromEntries(data)
    try {
        localStorage.setItem('userName', JSON.stringify(formData.userName))
        return toast.success(`歡迎${formData.userName}`)
    }catch(e){
        throw new Error('登入出現了錯誤')
    }
}

const Dashboard = () => {
    const { userName } = useLoaderData()

    return (
        <div>
            {userName ? (< p > {userName}</p>) : <Intro></Intro>}
        </div >
    );
};

export default Dashboard;