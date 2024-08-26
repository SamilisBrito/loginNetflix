import React from "react";

export function useFetch() {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! Status: ${response.status} - ${
            errorText || "Unknown Error"
          }`
        );
      }

      const json = await response.json();
      setData(json);
      return { response, json };
    } catch (err) {
      setError(err.message);
      setData(null);
      return { response: null, json: null };
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, request };
}
