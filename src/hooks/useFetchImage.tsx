import { useState } from "react";
import { fetchFn } from "../utils/fetchFn";
import { ImageDetails } from "../types";
import { unsplashRandomImgUrl } from "../constants";

const useFetchImage = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  const fetchData = async (topic: string) => {
    setLoading(true);
    setError(null);
    try {
      const json = await fetchFn<ImageDetails>(unsplashRandomImgUrl + topic);

      return json;
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { error, isLoading, fetchData };
};

export default useFetchImage;
