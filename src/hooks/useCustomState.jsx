import { useState } from "react";

export const useCustomState = (initialValue) => {
  const [storedValue, setStoredValue] = useState(initialValue);

  const setNewValue = (value) => {
    setStoredValue(value);
  };

  return [storedValue, setNewValue];
};
