import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <div>
        <h1>
          AN INNOVATIVE PLATFORM THAT <span>SUPPORTS ARTISTS.</span>
        </h1>
        <p>
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are
        </p>
        <Link to="/">Try it now</Link>
      </div>
      <div className="image image-1">
        <img src="/images/header-1.png" />
      </div>
      <div className="image">
        <img src="/images/header-2.png" />
      </div>
    </header>
  );
};

export default Header;
