import { useState } from "react";

export const useFetching = (fetchFunction) => {
  console.log(`USEFETCHING`);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    setHasError(false);

    try {
      await fetchFunction(); // Вызываем функцию загрузки данных
    } catch (error) {
      setHasError(true);
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetchData, isLoading, hasError];
};
