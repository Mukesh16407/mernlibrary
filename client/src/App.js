import { Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";

import "./stylesheets/alignments.css";
import "./stylesheets/theme.css";
import "./stylesheets/sizes.css";
import "./stylesheets/custom-components.css";
import "./stylesheets/form-elements.css";
import { Login } from "./pages/Login/Login,";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import BookDescription from "./pages/BookDescription";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";

function App() {
  const { loading } = useSelector((state) => state.loaders);
  return (
    <>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/book/:id" element={<BookDescription />} />
      </Routes>
    </>
  );
}

export default App;
