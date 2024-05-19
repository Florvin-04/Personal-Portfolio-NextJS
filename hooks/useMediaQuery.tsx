"use client";

import { useEffect, useState } from "react";

// usesage
// const matches = useMediaQuery('(min-width: 768px)')

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  const handleUpdate = (change: MediaQueryListEvent) => {
    setMatches(change.matches);
  };

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches) {
      setMatches(true);
    }

    media.addEventListener("change", handleUpdate);

    return () => media.removeEventListener("change", handleUpdate);
  }, [query]);

  return matches;
};

export default useMediaQuery;
