import { Link, Route, Routes } from "react-router-dom";

import "./App.css";
import Dashboard from "./components/Dashboard";
import Private from "./components/Private";
import Layout from "./components/Layout";
import Article from "./components/Article";
import Auth from "./components/Auth";

function App() {
  const slug = "1234";

  return (
    <div>
      <div className="navbar">
        <Link to="/">Dashboard</Link>
        <Link to="/private">Private</Link>
        <Link to={`/articles/${slug}`}>Article</Link>
      </div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route
            path="/private"
            element={
              <Auth>
                <Private />
              </Auth>
            }
          />
          <Route path="/articles/:slug" element={<Article />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
