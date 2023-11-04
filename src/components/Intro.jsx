import { Form } from "react-router-dom";
import { UserPlusIcon } from '@heroicons/react/24/solid'
import illustration from './../assets/illustration.jpg'
const Intro = () => {
    return (
        <div className="intro">
            <div>
                <h1>
                    <span className="accent">高雄記帳</span>小工具
                </h1>
                <p>
                    財富自由只差幾年，
                    今天就開始您的記帳旅程!
                </p>
                <Form method="post">
                    <input type="text"
                        name="userName"
                        required
                        placeholder="請輸入您的姓名"
                        autoComplete="given-name" />
                    <input type="hidden" name="_action" value='newUser'/>
                    <button type="submit" className="btn btn--dark">
                        <span>建立帳戶</span>
                        <UserPlusIcon width={20}></UserPlusIcon>
                    </button>
                </Form>
            </div>
            <img src={illustration} alt="" />
        </div>
    );
};

export default Intro;