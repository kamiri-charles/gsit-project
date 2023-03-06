import { useState } from "react"
import './styles.scss'

const Home = () => {

    const [user, setUser] = useState('user')

    return (
        <div className="home">
            Welcome, {user}
        </div>
    )
}

export default Home