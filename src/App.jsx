import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { Start } from "./pages/Startpage";
import { NotFoundpage } from "./pages/NotFoundpage";
import "./index.css";
// <Route path="/posts" element={<Blogpage />} />

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Start />} />
          <Route path="/*" element={<NotFoundpage />} />
        </Route>
      </Routes>
    </>
  );
}
