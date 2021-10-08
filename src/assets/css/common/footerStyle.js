/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const footer = props => css`
  width: 100%;
  background: #f7f7f7;
  border-top: 1px solid #dddddd;
  padding: 40px 5vw 0 5vw;
`;

const sections = props => css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-bottom: 30px;

  h3 {
    font-size: 12px;
    font-weight: 700;
    line-height: 17.6px;
  }

  ul li {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    padding: 10px 0;
  }

  @media (max-width: 743px) {
    grid-template-columns: repeat(1, 1fr);
    padding-bottom: 0px;

    section {
      padding: 3vh 0;
    }

    section:nth-of-type(1) {
      padding-top: 0;
    }

    section:not(:last-child) {
      border-bottom: 1px solid #dddddd;
    }
  }
`;

const companyDescription = props => css`
  border-top: 1px solid #dddddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;

  > div:nth-of-type(1) {
    span {
      margin: 0 5px;
    }
  }
`;

const icons = props => css`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background: none;
    border-style: none;
    display: flex;
    align-items: center;
    line-height: 25px;

    div {
      margin-left: 5px;
      text-decoration: underline;
      font-size: 14px;
    }
  }

  > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  > div:nth-of-type(2) {
    display: flex;
    justify-content: space-between;

    > div {
      padding: 0 8px;
    }
  }
`;

export { footer, sections, companyDescription, icons };
