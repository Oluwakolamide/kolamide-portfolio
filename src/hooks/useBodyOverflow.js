import { useEffect } from "react";

const useBodyOverflow = (open) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [open]);
};

export default useBodyOverflow;
