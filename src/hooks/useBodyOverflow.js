import { useEffect } from "react";

const useBodyOverflow = (open) => {
  useEffect(() => {
    const container = document.getElementById("blur-container");

    if (open) {
      document.body.style.overflow = "hidden";
      container.classList.add("blur-text");
    } else {
      document.body.style.overflow = "visible";
      container.classList.remove("blur-text");
    }

    return () => {
      document.body.style.overflow = "visible";
      container.classList.remove("blur-text");
    };
  }, [open]);
};

export default useBodyOverflow;
