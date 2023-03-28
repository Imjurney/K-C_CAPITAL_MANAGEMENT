import { debounce } from 'lodash';
import { useState, useCallback, useEffect } from 'react';

export function useInnerHeightState() {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleResize = useCallback(
    debounce(() => {
      setWindowSize({
        height: window.scrollY,
      });
    }, 100),
    []
  );
  useEffect(() => {
    window.addEventListener('scroll', handleResize);
    return () => {
      window.removeEventListener('scroll', handleResize);
    };
  }, []);
  return [windowSize];
}
