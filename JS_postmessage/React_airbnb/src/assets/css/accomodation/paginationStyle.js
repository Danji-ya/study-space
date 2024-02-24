/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const paginationPaddingContainer = props => css`
  padding: 60px 0;
`;

const paginationContainer = props => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const pageWrap = props => css`
  display: flex;

  font-size: 14px;
  text-align: center;
  line-height: 32px;
`;

const pageBtn = props => css`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  &:hover {
    background: rgba(133, 133, 133, 0.1);
    cursor: pointer;
  }
`;

const pageBtnDisable = props => css`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: rgb(221, 221, 221);

  &:hover {
    cursor: not-allowed;
  }
`;

const page = props => css`
  margin: 0 2px;
  width: 32px;
  height: 32px;
  border-radius: 50%;

  ${!props.isCurrentPage &&
  css`
    &:hover {
      background: rgba(133, 133, 133, 0.1);
      cursor: pointer;
    }
  `}

  ${props.isCurrentPage &&
  css`
    background: rgb(34, 34, 34);
    color: rgb(255, 255, 255);
  `}
`;

const totalPage = props => css`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 400;
  color: rgb(34, 34, 34);
`;

export {
  paginationPaddingContainer,
  paginationContainer,
  pageWrap,
  pageBtn,
  pageBtnDisable,
  page,
  totalPage,
};
