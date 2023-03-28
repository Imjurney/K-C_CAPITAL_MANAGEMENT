import { debounce } from 'lodash';
import { useState, useCallback, useEffect } from 'react';

export function useInnerWidthState() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleResize = useCallback(
    debounce(() => {
      setWindowSize({
        width: window.innerWidth,
      });
    }, 100),
    []
  );
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return [windowSize];
}
