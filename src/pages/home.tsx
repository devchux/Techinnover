import Career from "../components/sections/career";
import Footer from "../components/sections/footer";
import Header from "../components/sections/header";
import Moves from "../components/sections/moves";
import Navbar from "../components/sections/navbar";
import Partners from "../components/sections/partners";
import Tems from "../components/sections/tems";

function Home() {
  return (
    <main className="container">
      <Navbar />
      <Header />
      <Career />
      <Moves />
      <Tems />
      <Partners />
      <Footer />
    </main>
  );
}

export default Home;
