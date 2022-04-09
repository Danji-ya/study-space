/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const sliderContainer = props => css`
  flex: 0 1 300px;
  height: 200px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  background: orange;

  &:hover {
    cursor: pointer;

    a {
      opacity: 1;
    }
  }

  @media (max-width: 743px) {
    height: 60vw;
    max-height: 410px;
  }
`;

const sliderRow = props => css`
  width: ${`${props.imgTotalWidth}%`};
  margin-left: ${`-${props.position}%`};
  display: flex;
  height: 100%;
  transition: margin 0.5s;
`;

const sliderCol = props => css`
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const sliderBtns = props => css`
  position: absolute;
  background: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
  opacity: 0;
`;

const prevBtn = props => css`
  ${sliderBtns()}
  top: 50%;
  left: 8px;
  visibility: ${props.position === 0 ? 'hidden' : 'visible'};
`;

const nextBtn = props => css`
  ${sliderBtns()}
  top: 50%;
  right: 8px;
  visibility: ${props.position === props.imgTotalWidth - 100 ? 'hidden' : 'visible'};
`;

const dotRow = props => css`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  text-align: center;
`;

const dot = props => css`
  cursor: pointer;
  display: inline-block;
  height: 6px;
  width: 6px;
  border-radius: 6px;
  margin: 0 2px;
  background: #bbb;
  transform: scale(0.788);
  transition: 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;

  ${props.idx * 100 === props.position &&
  css`
    background: white;
    transform: scale(1);
  `}
`;

export { sliderContainer, sliderRow, sliderCol, prevBtn, nextBtn, dotRow, dot };
