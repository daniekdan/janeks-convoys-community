import Convoy from "./Components/Convoy";
import Disclaimer from "./Components/Disclaimer";
import Discord from "./Components/Discord";
import Footer from "./Components/Footer";
import Header  from "./Components/Header";
import Navbar from "./Components/Navbar";
import Team from "./Components/Team";
import "./styles.scss";

function App() {
  return (
    <div>
      
      <Header />
      <Navbar />
      <Discord />
      <Convoy />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
