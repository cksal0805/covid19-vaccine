import { useEffect, useState } from "react";

const useResizeObserverHooks = (ref) => {
  const [dimensions, setDimensions] = useState(null);
  useEffect(() => {
    const observerTarget = ref.current;
    const resizeObserver = new ResizeObserver((entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        setDimensions(entry.contentRect);
      });
    });
    resizeObserver.observe(observerTarget);
    return () => {
      resizeObserver.unobserve(observerTarget);
    }
  }, [ref])
  return dimensions;
}

export default useResizeObserverHooks;
