import logoMark from './../assets/logomark.svg'
import { Form, NavLink } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/solid'


const Nav = ({userName}) => {
    return (
        <nav>
            <NavLink to='/'>
                <img src={logoMark} alt="logo" height={30} />
                <span>HomeBudget</span>
            </NavLink>
            {
                userName && (
                    <Form method='post' action='/logout' onSubmit={
                        (e) => {
                            if (!confirm('確定要刪除使用者資訊和資料嗎?')) {
                                e.preventDefault()
                            }
                        }
                    }>
                        <button type='submit' className='btn btn--warning'>
                            <span>登出</span>
                            <TrashIcon width={20}></TrashIcon>
                        </button>

                    </Form>
                )
            }
        </nav >
    );
};

export default Nav; 