import "./App.css";
import axios from "axios";
import { useEffect, useReducer } from "react";

const initialState = {
  isLoading: false,
  error: null,
  data: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "getUsersStart": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "getUsersSuccess": {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state", state);

  useEffect(() => {
    dispatch({ type: "getUsersStart" });

    const getData = () => {
      axios.get("http://localhost:3000/users").then((response) => {
        setTimeout(() => {
          dispatch({ type: "getUsersSuccess", payload: response.data });
        }, 1000);
      });
    };

    getData();
  }, []);

  return (
    <div>
      {state.isLoading && <div>Loading... </div>}
      {state.data?.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default App;
