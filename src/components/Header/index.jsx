import './styles.scss'


const Header = ({isNavOpen, toggleNav}) => {
    return (
        <div className="header">
            <span className="header-title">GSIT Project</span>

            <i className={!isNavOpen ? 'bx bx-menu' : 'bx bx-x'} onClick={toggleNav}></i>
        </div>
    )
}
export default Header