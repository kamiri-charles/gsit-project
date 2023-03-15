import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom' 
import { fetch_user } from "../../utils/user_utils"
import MerchantView from "./MerchantView"
import AgentView from "./AgentView"
import { MetroSpinner } from "react-spinners-kit"
import './styles.scss'

const Home = () => {

    const [user, setUser] = useState()
    const [userType, setUserType] = useState()
    let nav = useNavigate()

    useEffect(() => {
        let userUUID = JSON.parse(localStorage.getItem('user'))?.uuid;

        if (userUUID) {
            let data = fetch_user(userUUID);
            data ? setUser(data) : nav('/sign-in');
        } else {
            nav('/sign-in');
        }

        (async () => {
            fetch(`http://localhost:8000/api/members/${userUUID}/type/`)
            .then(res => res.json())
            .then(data => setUserType(data))
        }) ()

    }, [nav])

    return (
        <div className="home">

            {userType === 'merchant' ? <MerchantView /> : userType === 'agent' ? <AgentView /> : <MetroSpinner />}

            {/* <div className="shop">
                <div className="name">Bismillahi Gen Shop</div>
                <div className="loc">Salgaa</div>
                <div className="sub-loc">
                    Near Kobil Petro Station, <br />
                    Nairobi, <br />
                    Kenya
                </div>
                <div className="distance">Distance: 1000km</div>
            </div>

            <div className="shop">
                <div className="name">Bismillahi Gen Shop</div>
                <div className="loc">Salgaa</div>
                <div className="sub-loc">
                    Near Kobil Petro Station, <br />
                    Nairobi, <br />
                    Kenya
                </div>
                <div className="distance">Distance: 1000km</div>
            </div>

            <div className="shop">
                <div className="name">Bismillahi Gen Shop</div>
                <div className="loc">Salgaa</div>
                <div className="sub-loc">
                    Near Kobil Petro Station, <br />
                    Nairobi, <br />
                    Kenya
                </div>
                <div className="distance">Distance: 1000km</div>
            </div>

            <div className="shop">
                <div className="name">Bismillahi Gen Shop</div>
                <div className="loc">Salgaa</div>
                <div className="sub-loc">
                    Near Kobil Petro Station, <br />
                    Nairobi, <br />
                    Kenya
                </div>
                <div className="distance">Distance: 1000km</div>
            </div>

            <div className="shop">
                <div className="name">Bismillahi Gen Shop</div>
                <div className="loc">Salgaa</div>
                <div className="sub-loc">
                    Near Kobil Petro Station, <br />
                    Nairobi, <br />
                    Kenya
                </div>
                <div className="distance">Distance: 1000km</div>
            </div> */}

        </div>
    )
}

export default Home
