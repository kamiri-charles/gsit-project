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
            Welcome {user}!
        </div>
    )
}

export default Home