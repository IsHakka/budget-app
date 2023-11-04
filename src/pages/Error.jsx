import { useRouteError } from "react-router-dom";
import { HomeIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";

const Error = () => {
    const error = useRouteError()
    // console.log(error);
    return (
        <div className="error">
            <h1>產生問題</h1>
            <p>{error.message || error.statusText}</p>
            <div className="flex-md">
                <button className="btn btn-dark">
                    <ArrowUturnLeftIcon width={20}></ArrowUturnLeftIcon>
                    <span>返回</span>
                </button>
                <Link to='/' className="btn btn-dark">
                    <HomeIcon width={20}></HomeIcon>
                    <span>回首頁</span>
                </Link>
            </div>
        </div>
    );
};

export default Error;