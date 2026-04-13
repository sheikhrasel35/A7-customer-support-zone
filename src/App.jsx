import { Suspense, useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Main_part from "./components/Main_part";
import Navbar from "./components/Navbar";

function App() {
  const [Count, setCount] = useState(0);
  const [customerSupport, setCustomerSupport] = useState([]);
  const [complateCount, setComplateCount] = useState(0);

  useEffect(() => {
    fetch("/Service.json")
      .then((res) => res.json())
      .then((data) => setCustomerSupport(data));
  }, []);

  return (
    <>
      <Navbar></Navbar>

      <Banner Count={Count} complateCount={complateCount}></Banner>

      <Main_part
        customerSupports={customerSupport}
        setCount={setCount}
        setComplateCount={setComplateCount}
        setCustomerSupport={setCustomerSupport}
      ></Main_part>
      <Footer></Footer>
    </>
    
  );
}

export default App;
