import { Link } from "react-router-dom";
import Button from "../button";

import "./navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h5>logo</h5>
      </div>
      <div>
        <Link to="/">Features</Link>
        <Link to="/">News</Link>
      </div>
      <div>
        <Button outlined>Sign up</Button>
        <Button>Log in</Button>
      </div>
    </nav>
  );
};

export default Navbar;
