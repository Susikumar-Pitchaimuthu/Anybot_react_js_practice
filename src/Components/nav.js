import "./nav.css";
import logo from "./logo.png";

function nav() {
  return (
    <nav className="Header">
      <div className="logo-links-div">
        <div className="logo-div">
          <img className="logo-image" src={logo} alt="logo_image" />
        </div>

        <div className="nav-links-div">
          <p>Document</p>
          <p>Tools Integrate</p>
        </div>
      </div>

      <div className="sign-log-button-div">
        <button className="signIn-button nav-btn">Sign in</button>
        <button className="signUp-button nav-btn">Sign up</button>
      </div>
    </nav>
  );
}

export default nav;
