import Cards from "./components/Cards";
import Lists from "./components/Lists";
import Gallary from "./components/Gallary";
import Test from "./components/Test";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useState } from "react";
import Footer from "./components/Footer";
function App() {
  const [show, setShow] = useState(false);
  setTimeout(() => {
    setShow(true);
  }, 4000);
  return (
    <>
      <Test />

      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
