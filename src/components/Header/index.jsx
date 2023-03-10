import './styles.scss'
import 'boxicons/css/boxicons.min.css'


const Header = ({toggleNav}) => {
    return (
        <div className="header">
            Header

            <i class='bx bx-menu' onClick={toggleNav}></i>
        </div>
    )
}
export default Header