import { useLocalStorage } from "../hooks/useLocalStorage";

const LocalStorageInput = () => {
  const [name, setName] = useLocalStorage("name", "Jack");

  return (
    <input
      type="text"
      placeholder="enter name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
};

export default LocalStorageInput;
