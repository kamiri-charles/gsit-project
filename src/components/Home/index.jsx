import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom' 
import { fetch_user } from "../../utils/user_utils"
import './styles.scss'

const Home = () => {

    const [user, setUser] = useState()
    let nav = useNavigate()

    useEffect(() => {
        console.log(user)
        let userUUID = JSON.parse(localStorage.getItem('user'))?.uuid;

        if (userUUID) {
            let data = fetch_user(userUUID);
            data ? setUser(data) : nav('/sign-in');
        } else {
            nav('/sign-in');
        }

    }, [nav])

    return (
        <div className="home">

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

        </div>
    )
}

export default Home
