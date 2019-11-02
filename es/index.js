import { useEffect } from 'react';
import { every } from 'lodash-es';

function checkContainEles(elements, e) {
  let res = [];
  elements.forEach(ref => {
    if (ref.current && ref.current.contains && !ref.current.contains(e.target)) {
      res.push(true);
    } else {
      res.push(false);
    }
  });
  return every(res, a => a === true);
}

function useOutside(refs, onOutsideClick, event = "click") {
  const handleOutsideClick = e => {
    if (checkContainEles(refs, e)) {
      onOutsideClick && onOutsideClick(e);
    }
  };

  useEffect(() => {
    document.addEventListener(event, handleOutsideClick, true);
    return () => {
      document.removeEventListener(event, handleOutsideClick, true);
    };
  });
}

export { useOutside };
