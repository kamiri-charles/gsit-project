import { useEffect, useState } from "react"
import './styles.scss'

const Home = () => {

    const [user, setUser] = useState()

    useEffect(() => {
        setUser(localStorage.getItem('user'))
    }, [])

    return (
        <div className="home">
            Welcome, {user ? user : 'guest'}
        </div>
    )
}

export default Home