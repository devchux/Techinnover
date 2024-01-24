import { Link } from "react-router-dom";
import "./career.scss";

const Career = () => {
  return (
    <section className="career">
      <div>
        <img src="/images/career.png" alt="" />
      </div>
      <div>
        <h2>YOUR CAREER IS IN YOUR HANDS</h2>
        <div>
          <p>
            Figma files can also be downloaded from our store. These files
            include the latest Figma features and are synced with the Webflow
            template.
          </p>
          <p>
            Figma files can also be downloaded from our store. These files
            include the latest Figma features and are synced{" "}
          </p>
          <p>
            Figma files can also be downloaded from our store. These files
            include the latest Figma features and are synced with the Webflow
            template.
          </p>
        </div>
        <Link to="/">Try it now</Link>
      </div>
    </section>
  );
};

export default Career;
