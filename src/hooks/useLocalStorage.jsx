import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const getValue = () => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = localStorage.getItem(key);
      return item ? JSON?.parse(item) : initialValue;
    } catch (error) {
      error && console.error(error);
    }
  };

  const [storedValue, setStoredValue] = useState(getValue());

  const setValue = (value) => {
    console.log("setValue called", value);
    try {
      setStoredValue(value);

      if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      error && console.error(error);
    }
  };

  return [storedValue, setValue, { getValue }];
};
