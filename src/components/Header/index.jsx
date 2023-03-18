import './styles.scss'
import 'boxicons/css/boxicons.min.css'


const Header = ({isNavOpen, toggleNav}) => {
    return (
        <div className="header">
            <span className="header-title">Header</span>

            <i className={!isNavOpen ? 'bx bx-menu' : 'bx bx-x'} onClick={toggleNav}></i>
        </div>
    )
}
export default Header