import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";

import { Routes, Route } from 'react-router-dom';
import Register from "./components/auth/Register";
import { AuthProvider } from "./contexts/AuthContext";
import About from "./components/about/About";
import CreateCard from "./components/cards/CreateCard";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/logout" element={<Logout />} />
          <Route path="/about" element={<About />} />
          <Route path="/cards/create" element={<CreateCard />} />
        </Routes>

        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
