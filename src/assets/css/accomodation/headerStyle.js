/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const headerContainer = props => css`
  z-index: 1;
  background: white;
  display: flex;
  align-items: flex-start;
  position: fixed;
  width: 100%;
  height: ${props.isSearchFormClick ? `180px` : `80px`};
  padding: 20px 25px 0 25px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`;

// simpleForm
const simpleSearchFormContainer = props => css`
  border-radius: 50px;
  border: 1px solid rgb(221, 221, 221);
  background: white;
  transition: box-shadow 0.2s ease;
  box-shadow: 1px 1px 2px 0px rgba(165, 165, 165, 0.5);

  max-width: 460px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;
  overflow: hidden;
  display: ${props.isSearchFormClick ? 'none' : 'flex'};

  &:hover {
    cursor: pointer;
    border: 1px solid #dddddd;
    box-shadow: 2px 2px 4px 0px rgba(165, 165, 165, 0.5);
  }

  span {
    width: 1px;
    background: rgb(221, 221, 221);
    height: 24px;
    align-self: center;
  }
`;

const resultWrap = props => css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  border: none;
  background: transparent;
  padding: 8px 20px;

  &:hover {
    cursor: pointer;
  }

  &:last-child {
    padding-right: 8px;
  }
`;

const searchBtnWrap = props => css`
  background: #ff385c;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin-left: 5px;
`;

export { headerContainer, simpleSearchFormContainer, resultWrap, searchBtnWrap };
