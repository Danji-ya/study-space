/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const mapContainer = props => css`
  padding: 7vh 0;
`;

const title = props => css`
  font-size: 22px;
  font-weight: 600;
`;

const mapWrap = props => css`
  padding: 2vh 0;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const descriptionWrap = props => css`
  width: 50%;

  h3 {
    font-size: 14px;
    font-weight: 600;
  }

  p {
    padding: 1.5vh 0 0 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`;

const extendArrow = props => css`
  display: inline-block;
  margin-top: 1.5vh;

  span {
    text-decoration: underline;
  }
  svg {
    display: inline-block;
    fill: none;
    height: 12px;
    width: 12px;
    stroke: currentcolor;
    stroke-width: 5.33333;
    overflow: visible;
  }

  &:hover {
    cursor: pointer;
  }
`;

export { mapContainer, title, mapWrap, descriptionWrap, extendArrow };
