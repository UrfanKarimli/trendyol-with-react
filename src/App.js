import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Sepet from "./pages/Sepet";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DiscountCoupons from "./pages/DiscountCoupons";



function App() {
  return (

    <div className="App">
<Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sepet" element={<Sepet/>} />
        <Route path="/giris" element={<Login />} />
        <Route path="/indirim-kuponlari" element={<DiscountCoupons/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
