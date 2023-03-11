import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom' 
import './styles.scss'

const Home = () => {

    const [user, setUser] = useState()
    let nav = useNavigate()

    useEffect(() => {
        let user = localStorage.getItem('user')
        user ? setUser(user) : nav('/sign-in')
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