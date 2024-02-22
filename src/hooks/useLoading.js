import { useState, useEffect } from "react";

const useLoading = () => {
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    const timer = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const progress = (elapsedTime / 3000) * 100;

      setLoading(progress > 100 ? 100 : progress);
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return loading;
};

export default useLoading;
