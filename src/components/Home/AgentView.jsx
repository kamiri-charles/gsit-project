import { useState, useEffect } from 'react'
import './AgentView.scss'

const AgentView = () => {
    let [merchants, setMerchants] = useState([])

    useEffect(() => {
        (async () => {
            let user = JSON.parse(localStorage.getItem('user'))
            fetch(`http://localhost:8000/api/agents/${user.uuid}/merchants/`)
            .then(res => res.json())
            .then(data => setMerchants(data))

        }) ()
    })

    return (
        <div className="agent-view">
            <div className="merchant">
                <div className="username">username</div>
                <div className="name">name name</div>
                <div className="email">test123@gmail.com</div>
                <div className="state">Signed in</div>


            </div>
        </div>
    )
}

export default AgentView