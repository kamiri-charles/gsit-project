import { useState, useEffect } from 'react'
import './AgentView.scss'
import "boxicons/css/boxicons.min.css"


const AgentView = () => {
    let [merchants, setMerchants] = useState([])

    useEffect(() => {
        (async () => {
            let user = JSON.parse(localStorage.getItem('user'))
            fetch(`http://localhost:8000/api/agents/${user.uuid}/merchants/`)
            .then(res => res.json())
            .then(data => setMerchants(data))

        }) ()
    }, [])

    return (
      <div className="agent-view">
        {merchants.map((merchant) => (
          <div className="merchant">
            <div className="s_1">
              <div className="profile-img">
                <i className="bx bx-user"></i>
              </div>

              <div className="meta_1">
                <div className="username">{merchant.username}</div>
                <div className="email">{merchant.email}</div>
              </div>
            </div>

            <div className="s_2">
              <div className="name">Name: {merchant.name ? merchant.name : 'None'}</div>
              <div className="sales">Sales: Ksh. 12,000</div>
              <div className="state">Not signed in</div>
            </div>
          </div>
        ))}
      </div>
    );
}

export default AgentView