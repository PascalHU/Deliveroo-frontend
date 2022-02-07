import "./header.css";
import logo from "../assets/img/logo.png";

const Header = ({ data }) => {
  return (
    <header>
      <div className="container">
        <img className="logo" src={logo} alt="logo deliveroo" />
      </div>
      <div className="line"></div>
      <div className="restaurant container">
        <div>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
        </div>
        <img src={data.picture} alt="restaurant" />
      </div>
    </header>
  );
};

export default Header;
