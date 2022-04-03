import { useDispatch, useSelector } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import { LOGIN, PASSWORD } from "../../constants/constants"
import { login } from "../../redux/actions/actions"
import './styles.css'

const LoginPage = () => {
    const state = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const loginHandler = (event) => {
        dispatch(login(LOGIN, event.target.value))
        console.log(state.login)
    }
    const passwordHandler = (event) => {
        dispatch(login(PASSWORD, event.target.value))
        console.log(state.password)
    }
    return(
        <form className="form">
            <input 
            className="form_input"
            onChange={loginHandler} />
            <input
            className="form_input"
            onChange={passwordHandler} />
            <Link 
            className={`form_btn ${state.login === 'developer12' && state.password === '123456' ? '' : 'form_btn--disabled'}`}
            to = '/'>
            Enter
            </Link>
        </form>
    )
}

export default withRouter(LoginPage)
