import React, {useEffect} from "react";
import ReactGA from "react-ga";

export const useTracker = (path) => {
  useEffect(() => {
    ReactGA.pageview(path);
  }, [])
};
