import { useState, useEffect } from "react";

export function detectScreenSize() {
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setInnerWidth(window.innerWidth);
    }
  }, []);

  return innerWidth;
}
