import { useRef } from 'react';

function useMoveScroll() {
  const element = useRef<HTMLElement>(null);
  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return { element, onMoveToElement };
}

export default useMoveScroll;
