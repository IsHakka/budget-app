import { Form, NavLink } from "react-router-dom"
import logomark from "../assets/orange.png"

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink
        to="/"
      >
        <img src={logomark} alt="" height={30} />
        <span>外租族費用管理</span>
      </NavLink>
      {
        userName && (
          <Form
            method="post"
            action="logout"
            onSubmit={(event) => {
              if (!confirm("登出後資料無法保存，您確定要登出嗎?")) {
                event.preventDefault()
              }
            }}
          >
            <button type="submit" className="btn btn--warning">
              <span>登出</span>
            </button>

          </Form>
        )
      }
    </nav>
  )
}
export default Nav