// Import Effect and States hooks from react
import { useEffect, useState } from "react";

// Create a custom hook to return the screen size
interface ScreenSize {
  innerWidth: number;
  innerHeight: number;
  outerWidth: number;
  outerHeight: number;
}

export const useScreenSize = () => {
  const getWindowSize = () => ({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
  });

  // Create a state to store the screen size
  const [screenSize, setScreenSize] = useState<ScreenSize>(getWindowSize());

  // Create a function to update the screen size
  const handleResize = () => {
    // Update the screen size value
    setScreenSize(getWindowSize());
  };

  // Create a effect to update the screen size on window resize
  useEffect(() => {
    // attach the event listener
    window.addEventListener("resize", handleResize);

    // clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Return the screen size
  return screenSize;
}
