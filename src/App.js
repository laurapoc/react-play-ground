import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios.get("http://localhost:3000/users").then((response) => {
        setData(response.data);
      });
    };

    getData();
  }, []);

  return (
    <div className="App">
      {data.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default App;
