/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const reviewContainer = props => css`
  padding: 40px 0;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
`;

const title = props => css`
  > div {
    font-size: 22px;
    font-weight: 600;
    line-height: 26px;

    > span {
      color: black;
      font-size: 22px;
      font-weight: 600;
      line-height: 26px;
    }
  }
`;

const reviewList = props => css`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 22px 55px;
`;

const reviewItem = props => css`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

const userProfile = props => css`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;

  p {
    font-size: 14px;
    font-weight: 400;
    color: rgb(113, 113, 113);
  }
`;

const userImg = props => css`
  width: 64px;
  height: 64px;
  margin-right: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const ell = props => css`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: pre-line;
`;

export { reviewContainer, title, reviewList, reviewItem, userProfile, userImg, ell };
