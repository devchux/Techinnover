import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div>
          <h4>SHORT LINE ABOUT US</h4>
          <h4>THREE WORDS HERE</h4>
          <p>Short sentence here</p>
        </div>
        <div>
          <div>
            <h4>CONNECT</h4>
            <h4>WITH</h4>
            <h4>US</h4>
          </div>
          <div>
            <div>
              <Link to="/">
                Twitter <img src="/svgs/angle-arrow.svg" alt="" />
              </Link>
              <Link to="/">
                Discord <img src="/svgs/angle-arrow.svg" alt="" />
              </Link>
              <Link to="/">
                Instagram <img src="/svgs/angle-arrow.svg" alt="" />
              </Link>
            </div>
            <div>
              <Link to="/">
                Cookies <img src="/svgs/angle-arrow.svg" alt="" />
              </Link>
              <Link to="/">
                Licenses <img src="/svgs/angle-arrow.svg" alt="" />
              </Link>
              <Link to="/">
                Contact <img src="/svgs/angle-arrow.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <p>2022</p>
            <div className="point" />
            <p>PLATFORM</p>
          </div>
          <p>2022</p>
        </div>
        <div>
          <p>TERMS & CONDITIONS</p>
          <p>PRIVACY POLICY</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
