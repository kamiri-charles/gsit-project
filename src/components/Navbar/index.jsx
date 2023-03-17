import { useNavigate } from 'react-router-dom'
import 'boxicons/css/boxicons.min.css'
import './styles.scss'


const Navbar = ({isNavOpen, toggleNav}) => {

    let nav = useNavigate();

    const sign_out = () => {
        localStorage.clear()
        nav('/sign-in')
    }

    return (
        <div id='navbar' className={isNavOpen ? '' : 'inactive'}>
            <div className="left">
                <div className="brand">

                    <div className="brand-image">
                        <img src={require("../../dev_assets/tropical_heat_img.jpeg")} alt="Tropical Heat" />
                    </div>

                    <div className="brand-meta">
                        <div className="brand-name">Tropical Heat Ltd.</div>
                        <div className="brand-email">crp@tropicalheat.co.ke</div>
                    </div>

                </div>

                <div className="links">
                    <div className="link">
                        <i className='bx bx-arrow-from-left'></i>
                        Check-in
                    </div>
                    
                    <div className="link">
                        <i className='bx bxs-arrow-from-right'></i>
                        Check-out
                    </div>

                    <div className="link">
                        <i className='bx bxs-store'></i>
                        Outlets
                    </div>

                    <div className="link">
                        <i className='bx bx-wallet'></i>
                        My Sales
                    </div>

                    <div className="link" onClick={sign_out}>
                        <i className='bx bx-log-out'></i>
                        Sign Out
                    </div>
                </div>
            </div>
            <div className="right" onClick={() => {
                if (isNavOpen) toggleNav();
            }}></div>
        </div>
    )
}



export default Navbar