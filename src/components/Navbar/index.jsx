import { useEffect, useState } from 'react'
import AgentNavView from './AgentNavView'
import MerchantNavView from './MerchantNavView'
import { fetch_user } from '../../utils/user_utils'
import './styles.scss'


const Navbar = ({isNavOpen, toggleNav}) => {

    let [userData, setUserData] = useState();
    let [userType, setUserType] = useState();

    useEffect(() => {
        let userUUID = JSON.parse(localStorage.getItem('user'))?.uuid;
        fetch(`https://kamiri-gsit-project.azurewebsites.net/api/members/${userUUID}/type/`)
        .then(res => res.json())
        .then(data => setUserType(data))

        fetch_user(userUUID).then(data => setUserData(data))

    }, [])


    return (
      <div id="navbar" className={isNavOpen ? "" : "inactive"}>
        {userType === "agent" ? (
          <AgentNavView
            data={userData}
            isNavOpen={isNavOpen}
            toggleNav={toggleNav}
          />
        ) : (
          <MerchantNavView
            data={userData}
            isNavOpen={isNavOpen}
            toggleNav={toggleNav}
          />
        )}

        <div
          className="right"
          onClick={() => {
            if (isNavOpen) toggleNav();
          }}
        ></div>
      </div>
    );
}



export default Navbar