import { useEffect, useReducer, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import LocalStorageInput from "./components/LocalStorageInput";
import RandomList from "./components/RandomList";
import { useLocalStorage } from "./hooks/useLocalStorage";

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
  const [{ response, isLoading }] = useFetch("http://localhost:3000/users");
  const [, setLocalStorageValue, { getValue }] = useLocalStorage(
    "name",
    "Jack"
  );

  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch({ type: "getUsersStart" });
  }, []);

  const randomList = [
    { id: 1, name: "Jack" },
    { id: 2, name: "John" },
    { id: 3, name: "Jill" },
    { id: 4, name: "Joe" },
    { id: 5, name: "Jane" },
  ];

  const handleClick = () => {
    setLocalStorageValue(randomList[count].name);
    setCount((prev) => {
      if (count < randomList.length - 1) {
        return prev + 1;
      }
      return 0;
    });
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
        <button onClick={handleClick}>
          Click to update local storage name key to {getValue()}
        </button>
        <RandomList listItems={randomList} />
      </div>
    </div>
  );
}

export default App;
