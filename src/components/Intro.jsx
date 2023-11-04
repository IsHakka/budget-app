import { Form } from "react-router-dom"
import { UserPlusIcon } from "@heroicons/react/24/solid";
import illustration from "../assets/orange.png"

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          我不要當<span className="accent">月光族</span>
        </h1>
        <p>
          個人預算是財務自由的秘訣，今天就開始您的旅程!
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="請問貴姓大名?" aria-label="Your Name" autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>建立帳戶</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  )
}
export default Intro