'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var lodashEs = require('lodash-es');

function checkContainEles(elements, e) {
  let res = [];
  elements.forEach(ref => {
    if (ref.current && ref.current.contains && !ref.current.contains(e.target)) {
      res.push(true);
    } else {
      res.push(false);
    }
  });
  return lodashEs.every(res, a => a === true);
}

function useOutside(refs, onOutsideClick, event = "click") {
  const handleOutsideClick = e => {
    if (checkContainEles(refs, e)) {
      onOutsideClick && onOutsideClick(e);
    }
  };

  React.useEffect(() => {
    document.addEventListener(event, handleOutsideClick, true);
    return () => {
      document.removeEventListener(event, handleOutsideClick, true);
    };
  });
}

exports.useOutside = useOutside;
