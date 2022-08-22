import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { Main } from "./pages/Mainpage";
import {NotFoundpage} from './pages/NotFoundpage';
// <Route path="/posts" element={<Blogpage />} />

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/*" element={<NotFoundpage />} />
        </Route>
      </Routes>
    </>
  );
}
