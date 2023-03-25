import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom' 
import { fetch_user } from "../../utils/user_utils"
import MerchantView from "./MerchantView"
import AgentView from "./AgentView"
import { MetroSpinner } from "react-spinners-kit"
import SubHeader from "./SubHeader"
import './styles.scss'

const Home = () => {

    const [userType, setUserType] = useState()
    let nav = useNavigate()


    useEffect(() => {
        let userUUID = JSON.parse(localStorage.getItem('user'))?.uuid;

        if (userUUID) {
            fetch_user(userUUID).then(data => {
                if (!data) nav('/sign-in')
            })

        } else {
            nav('/sign-in');
        }

        (async () => {
            fetch(`https://kamiri-gsit-project.azurewebsites.net/api/members/${userUUID}/type/`)
            .then(res => res.json())
            .then(data => setUserType(data))
        }) ()

    }, [nav])

    return (
        <div className="home">
            <SubHeader />
            {
            userType === 'merchant' ?
                <MerchantView /> :
                userType === 'agent' ?
                <AgentView /> : <MetroSpinner color='#000' />
            }
        </div>
    )
}

export default Home
