/* eslint-disable react/jsx-pascal-case */
import { useState, useEffect } from "react";
import "./styles.scss";

const AgentView = () => {
  let [merchants, setMerchants] = useState([]);

  let current_section = localStorage.getItem('section');

  useEffect(() => {
    (async () => {
      let user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      fetch(`http://localhost:8000/api/agents/${user.uuid}/merchants/`)
        .then((res) => res.json())
        .then((data) => setMerchants(data));
    })();
  }, []);

  if (current_section === 'dashboard') return <AgentView__Dashboard data={JSON.parse(localStorage.getItem("user"))} />
  else if (current_section === 'merchants') return <AgentView__Merchants data={merchants} />
  else if (current_section === 'outlets') return <AgentView__Outlets />
  else if (current_section === 'sales') return <AgentView__Sales />


};

export default AgentView;

const AgentView__Dashboard = ({data}) => {
  return (
    <div className="agent-view">
      <div className="dashboard">
        <div className="dashcard">
          <div className="title">Info</div>
          <div className="name">Name: <span>{data.first_name}  {data.last_name}</span></div>
          <div className="username">Username: <span>{data.username}</span></div>
          <div className="email">Email: <span>{data.email}</span></div>
        </div>
      </div>
    </div>
  )
}

const AgentView__Merchants = ({ data }) => {
  return (
    <div className="agent-view">
      {data.map((merchant) => (
        <div className="merchant" key={merchant.id}>
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
            <div className="name">
              Name: {merchant.name ? merchant.name : "None"}
            </div>
            <div className="sales">Sales: Ksh. 12,000</div>
            <div className="state">Not signed in</div>
          </div>
        </div>
      ))}
    </div>
  );
};


const AgentView__Outlets = () => {
  return (
    <div className="agent-view">Outlets</div>
  )
}


const AgentView__Sales = () => {
  return (
    <div className="agent-view">Sales</div>
  )
}