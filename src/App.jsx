import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { Start } from "./pages/Startpage";
import { Main } from "./pages/MainPage";
import { NotFoundpage } from "./pages/NotFoundpage";
import "./index.css";
import { LoginPage } from "./pages/LoginPage";
// <Route path="/posts" element={<Blogpage />} />

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Start />} />
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<NotFoundpage />} />
        </Route>
      </Routes>
    </>
  );
}
