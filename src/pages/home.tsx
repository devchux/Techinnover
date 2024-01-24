import Career from "../components/sections/career";
import Header from "../components/sections/header";
import Moves from "../components/sections/moves";
import Navbar from "../components/sections/navbar";
import Tems from "../components/sections/tems";

function Home() {
  return (
    <main className="container">
      <Navbar />
      <Header />
      <Career />
      <Moves />
      <Tems />
    </main>
  );
}

export default Home;
