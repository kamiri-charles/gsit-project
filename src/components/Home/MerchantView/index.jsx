/* eslint-disable react/jsx-pascal-case */
import './styles.scss';



const MerchantView = () => {
  let current_section = localStorage.getItem("section");

  if (current_section === "dashboard")
    return (
      <MerchantView__Dashboard data={JSON.parse(localStorage.getItem("user"))} />
    );
  else if (current_section === "check")
    return <MerchantView__Check />;
  else if (current_section === "outlets") return <MerchantView__Outlets />;
  else if (current_section === "sales") return <MerchantView__Sales />;

}

export default MerchantView;


const MerchantView__Dashboard = ({ data }) => {
  return (
    <div className="merchant-view">
      <div className="dashboard">
        <div className="dashcard">
          <div className="title">Info</div>
          <div className="name">
            Name:{" "}
            <span>
              {data.first_name} {data.last_name}
            </span>
          </div>
          <div className="username">
            Username: <span>{data.username}</span>
          </div>
          <div className="email">
            Email: <span>{data.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const MerchantView__Check = ({ data }) => {
  return (
    <div className="merchant-view">
      Check
    </div>
  );
};

const MerchantView__Outlets = ({data}) => {
  return <div className="merchant-view">Outlets</div>;
};

const MerchantView__Sales = () => {
  return <div className="merchant-view">Sales</div>;
};