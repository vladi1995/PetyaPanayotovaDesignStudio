import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";

import {Routes, Route} from 'react-router-dom';
import Register from "./components/auth/Register";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
