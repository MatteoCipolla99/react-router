import { BrowserRouter, Routes, Route } from "react-router-dom";

//Layout
import DefaultLayout from "./layouts/DefaultLayout";

//Pages
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PostDetail from "./pages/PostDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<ContactUs />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
