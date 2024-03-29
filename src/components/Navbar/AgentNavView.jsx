import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AgentNavView = ({ data, toggleNav, isNavOpen }) => {
  let nav = useNavigate();

  let [activeLink, setActiveLink] = useState(0);

  let handleClick = (id) => {
    setActiveLink(id);
    localStorage.setItem("section", nav_link_mapping[id]);

    if (isNavOpen) toggleNav();
  };

  const sign_out = () => {
    localStorage.clear();
    nav("/sign-in");
  };

  let nav_link_mapping = {
    0: "dashboard",
    1: "merchants",
    2: "outlets",
    3: "sales",
  };

  useEffect(() => {
    localStorage.setItem("section", "dashboard");
  }, []);

  return (
    <div className="left">
      <div className="top">
        <div className="image">
          {data?.agent.brand_image ? (
            <img src={data.agent.brand_image} alt="" />
          ) : (
            <i className="bx bx-user"></i>
          )}
        </div>
        <div className="meta">
          <div className="email">{data?.agent.brand_email}</div>
          <div className="name">{data?.first_name + " " + data?.last_name}</div>
        </div>
      </div>

      <div className="links">
        {/* <div className="link">
        <i className="bx bx-arrow-from-left"></i>
        Check-in
      </div> */}

        {/* <div className="link">
        <i className="bx bxs-arrow-from-right"></i>
        Check-out
      </div> */}

        <div
          className={activeLink === 0 ? "link active" : "link"}
          onClick={() => handleClick(0)}
        >
          <i className="bx bxs-dashboard"></i>
          Dashboard
        </div>

        <div
          className={activeLink === 1 ? "link active" : "link"}
          onClick={() => handleClick(1)}
        >
          <i className="bx bxs-user"></i>
          Merchants
        </div>

        <div
          className={activeLink === 2 ? "link active" : "link"}
          onClick={() => handleClick(2)}
        >
          <i className="bx bxs-store"></i>
          Outlets
        </div>

        <div
          className={activeLink === 3 ? "link active" : "link"}
          onClick={() => handleClick(3)}
        >
          <i className="bx bx-wallet"></i>
          Sales
        </div>

        <div className="link logout" onClick={sign_out}>
          <i className="bx bx-log-out"></i>
          Sign Out
        </div>
      </div>
    </div>
  );
};

export default AgentNavView;
