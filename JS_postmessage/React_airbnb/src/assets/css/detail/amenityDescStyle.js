/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const amenityContainer = props => css`
  padding: 4vh 0;
  border-bottom: 1px solid #dddddd;
`;

const title = props => css`
  font-size: 22px;
  font-weight: 600;
`;

const amenityList = props => css`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  margin: 30px 0;
`;

const amenityItem = props => css`
  display: flex;

  align-items: center;
  svg {
    display: block;
    height: 24px;
    width: 24px;
    fill: currentcolor;

    margin-right: 15px;
  }

  p {
    font-weight: 400;
  }
`;

const moreBtn = props => css`
  color: rgb(34, 34, 34);

  a {
    display: inline-block;
    border: 1px solid rgb(34, 34, 34);
    background: rgb(255, 255, 255);
    padding: 13px 23px;
    border-radius: 10px;

    &:hover {
      cursor: pointer;
      background: rgba(165, 165, 165, 0.1);
    }
  }
`;

export { amenityContainer, amenityList, amenityItem, title, moreBtn };
