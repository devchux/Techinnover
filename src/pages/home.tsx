import Career from "../components/sections/career";
import Header from "../components/sections/header";
import Navbar from "../components/sections/navbar";

function Home() {
  return (
    <main className="container">
      <Navbar />
      <Header />
      <Career />
    </main>
  );
}

export default Home;
