import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const useGsap = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let context = gsap.context;
    () => {
      const t1 = gsap.timeline();
    },
      comp;

    return () => context.revert();
  }, []);
};

export default useGsap;
