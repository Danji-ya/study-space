import styled from 'styled-components';
import { As, Dict } from '../types';

export function getCssObject() {
  // TODO: 불필요한 cssObj 필터링 또는 우선순위 필터링 작업

  return {};
}

export function styling<T extends As>(Component: T, styles: Dict) {
  return styled(Component)(styles);
}
