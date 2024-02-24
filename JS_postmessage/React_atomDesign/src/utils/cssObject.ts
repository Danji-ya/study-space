import styled from 'styled-components';
import { As, Dict } from '../types';
import { isObject } from './assertion';

export function getCssObject(styles: Array<Dict | string>) {
  let computedStyles: Dict = {};

  for (let i = 0; i < styles.length; i += 1) {
    if (isObject(styles[i])) {
      computedStyles = Object.assign(computedStyles, styles[i]);
    } else {
      // TODO: 예외 처리
    }
  }

  return computedStyles;
}

export function styling<T extends As>(
  Component: T,
  ...styles: Array<Dict | string>
) {
  const cssObj = getCssObject(styles);

  return styled(Component)(cssObj);
}
