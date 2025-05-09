import axios from "axios";
import { useCallback, useState } from "react";

const useFetch = (url) => {
  const [response, setResponse] = useState();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const doFetch = useCallback(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setTimeout(() => {
          setResponse(response.data);
          setIsLoading(false);
        }, 300);
      })
      .catch((error) => {
        setError(error.response.data || "server error");
        setIsLoading(false);
      });
  }, [url]);

  return [{ response, error, isLoading }, doFetch];
};

export default useFetch;
