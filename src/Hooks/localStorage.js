import { useState, useEffect } from 'react';

const getState = (key, initalValue) => localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initalValue;

export const useLocalStorage = (key, initalValue) => {
  const [state, setState] = useState(getState(key, initalValue));

  // const setLocalStorageState = value => {
  //   if(typeof value === 'function') setState(prevState => {
  //     const updatedState = value(prevState);
  //     localStorage.setItem(key, JSON.stringify(updatedState));
  //   });

  //   setState(value);
  //   localStorage.setItem(key, JSON.stringify(value));
  // };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};