import './styles.scss'
import 'boxicons/css/boxicons.min.css'


const Navbar = ({isNavOpen, toggleNav}) => {

    return (
        <div id='navbar' className={isNavOpen ? '' : 'inactive'}>
            <div className="left">
                <div className="brand">

                    <div className="brand-image">
                        {/* Image goes here */}
                    </div>

                    <div className="brand-meta">
                        <div className="brand-name">Test Brand Name</div>
                        <div className="brand-email">abc123@gmail.com</div>
                    </div>

                </div>

                <div className="links">
                    <div className="link">
                        <i className='bx bx-arrow-from-left'></i>
                        Check-in
                    </div>
                    
                    <div className="link">
                        <i class='bx bxs-arrow-from-right'></i>
                        Check-out
                    </div>

                    <div className="link">
                        <i class='bx bxs-store'></i>
                        Outlets
                    </div>

                    <div className="link">
                        <i class='bx bx-wallet'></i>
                        My Sales
                    </div>

                    <div className="link">
                        <i class='bx bx-log-out'></i>
                        Logout
                    </div>
                </div>
            </div>
            <div className="right" /* onClick={toggleNav} */></div>
        </div>
    )
}



export default Navbar