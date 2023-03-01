import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";

import { Routes, Route } from 'react-router-dom';
import Register from "./components/auth/Register";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>

        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
