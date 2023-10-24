import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Sepet from "./pages/Sepet";
import Login from "./pages/Login";



function App() {
  return (

    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sepet" element={<Sepet/>} />
        <Route path="/giris" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
