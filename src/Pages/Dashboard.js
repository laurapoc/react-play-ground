import React, { useReducer, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import LocalStorageInput from "../components/LocalStorageInput";
import { useLocalStorage } from "../hooks/useLocalStorage";

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

const Dashboard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [{ response, isLoading }, doFetch] = useFetch(
    "http://localhost:3000/users"
  );
  const [, setToken] = useLocalStorage("token", "");

  useEffect(() => {
    dispatch({ type: "getUsersStart" });

    doFetch();
  }, [doFetch]);

  const handleCreateToken = () => {
    setToken("123456789");
  };

  return (
    <div>
      {isLoading && <div>Loading... </div>}
      {state.data?.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
      {response?.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
      <LocalStorageInput />
      <div>
        <h2>Dashboard</h2>
        <div>
          <button onClick={handleCreateToken}>Create a token</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
