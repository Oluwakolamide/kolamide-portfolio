import { useState, useEffect } from "react";

const useLoading = () => {
  const [loading, setLoading] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const startTime = Date.now();

    const timer = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const progress = (elapsedTime / 3000) * 100;

      setLoading(progress > 100 ? 100 : progress);

      if (progress >= 100) {
        clearInterval(timer);
        setIsMounted(false);
        setIsLoaded(true);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return { loading, isMounted, isLoaded };
};

export default useLoading;
