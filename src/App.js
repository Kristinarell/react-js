import "./styles/style.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import { HomePage } from "./pages/HomePage";
import { PostsPage } from "./pages/PostsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsPage />} />
          <Route path="posts" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
