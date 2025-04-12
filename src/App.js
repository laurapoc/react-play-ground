import "./App.css";
import axios from "axios";
import { useEffect, useReducer } from "react";
import useFetch from "./hooks/useFetch";

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
  const [{ response, error, isLoading }, doFetch] = useFetch("http://localhost:3000/users")

  useEffect(() => {
    dispatch({ type: "getUsersStart" });

    doFetch()

    // const getData = () => {
    //   axios.get("http://localhost:3000/users").then((response) => {
    //     setTimeout(() => {
    //       dispatch({ type: "getUsersSuccess", payload: response.data });
    //     }, 1000);
    //   });
    // };

    // getData();
  }, [doFetch]);

  return (
    <div>
      {isLoading && <div>Loading... </div>}
      {/* {state.isLoading && <div>Loading... </div>} */}
      {state.data?.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
      {response?.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default App;
