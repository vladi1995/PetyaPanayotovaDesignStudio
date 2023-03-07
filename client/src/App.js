import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";

import { Routes, Route } from 'react-router-dom';
import Register from "./components/auth/Register";
import { AuthProvider } from "./contexts/AuthContext";
import { CardProvider } from "./contexts/CardContext";
import About from "./components/about/About";
import CreateCard from "./components/cards/CreateCard";
import CatalogCards from "./components/cards/CatalogCards";
import CardDetails from "./components/cards/CardDetails";
import CardEdit from "./components/cards/CardEdit";
import CardDelete from "./components/cards/CardDelete";
import UserProfile from "./components/user/UserProfile";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <CardProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/logout" element={<Logout />} />
            <Route path="/about" element={<About />} />
            <Route path="/cards/create" element={<CreateCard />} />
            <Route path="/cards/catalog" element={<CatalogCards />} />
            <Route path="/cards/details/:cardId" element={<CardDetails />} />
            <Route path="/cards/edit/:cardId" element={<CardEdit />} />
            <Route path="/cards/delete/:cardId" element={<CardDelete />} />
            <Route path="/user/profile/:userId" element={<UserProfile />} />
          </Routes>
        </CardProvider>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
