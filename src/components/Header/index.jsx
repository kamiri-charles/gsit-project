import { useRef } from 'react'
import './styles.scss'


const Header = ({isNavOpen, toggleNav}) => {

    let headerRef = useRef(null);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0 && !headerRef.current.classList.contains('window-scrolled')) {
            headerRef.current.classList.add('window-scrolled')
        }
        else if (window.scrollY === 0 && headerRef.current.classList.contains('window-scrolled')) {
            headerRef.current.classList.remove('window-scrolled');
        }
    })
    return (
        <div className="header" ref={headerRef}>
            <i className={!isNavOpen ? 'bx bx-menu' : 'bx bx-x'} onClick={toggleNav}></i>
            <span className="header-title">GSIT Project</span>
        </div>
    )
}
export default Header