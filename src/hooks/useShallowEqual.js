import { shallowEqual, useSelector } from 'react-redux';

export const useShallowEqual = (selector) => {
  return useSelector(selector, shallowEqual);
}