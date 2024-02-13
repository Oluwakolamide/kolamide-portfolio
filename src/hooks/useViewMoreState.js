import { useState } from "react";

const useViewMoreState = () => {
  const [viewMore, setViewMore] = useState(false);

  const toogleViewMore = () => {
    setViewMore(!viewMore);
  };

  return { viewMore, setViewMore, toogleViewMore };
};

export default useViewMoreState;
