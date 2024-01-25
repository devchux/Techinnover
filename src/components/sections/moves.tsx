import { Link } from "react-router-dom";
import "./moves.scss";

const Moves = () => {
  return (
    <section className="moves">
      <div>
        <h2>USE YOUR STATS TO MAKE MOVES</h2>
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
        <Link to="/">
          Try it now <img src="/svgs/right-arrow-black.svg" alt="" />
        </Link>
      </div>
      <div>
        <div>
          <div>
            <img src="/images/graph.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Moves;
