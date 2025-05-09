import { Link, Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./Pages/Layout";
import Dashboard from "./Pages/Dashboard";
import Auth from "./Pages/Auth";
import Private from "./Pages/Private";
import Article from "./Pages/Article";

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
