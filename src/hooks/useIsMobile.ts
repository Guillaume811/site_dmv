import { useEffect, useState } from "react";

/* useIsMobile
* A custom hook that checks if the screen width is less than or equal to a given "breakpoint" (default is 768).
* Uses "useState" to store a boolean "isMobile" that tracks whether the device is mobile-sized.
* Uses "useEffect" to:
  -> Define a resize handler that updates "isMobile" based on the current window width.
  -> Call the handler once when the hook runs to set the initial value.
  -> Add a "resize" event listener to update "isMobile" when the window changes size.
  -> Clean up the event listener when the component using the hook unmounts.

* Returns "isMobile", which is true if the screen width is mobile-sized.
*/
const useIsMobile = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    handleResize(); // appel initial
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;