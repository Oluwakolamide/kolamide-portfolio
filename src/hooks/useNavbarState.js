import { useState } from "react";

const useNavbarState = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };

  return { open, setOpen, handleClick };
};

export default useNavbarState;
