import { useCustomState } from "../hooks/useCustomState";
import { useLocalStorage } from "../hooks/useLocalStorage";

const LocalStorageInput = () => {
  const [name, setName] = useLocalStorage("name", "Jack");
  const [count, setCount] = useCustomState(name.length);

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleButtonClick = () => {
    setCount(name.length);
  };

  return (
    <>
      <input
        type="text"
        placeholder="enter name"
        value={name}
        onChange={handleNameChange}
      />
      <div style={{ marginTop: "10px" }}>
        <div style={{ marginTop: "10px" }}>{name + " = " + count}</div>
        <button onClick={handleButtonClick}>Count symbols</button>
      </div>
    </>
  );
};

export default LocalStorageInput;
