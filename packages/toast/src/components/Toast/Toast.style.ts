import styled, { css, keyframes } from 'styled-components';

const toastProgress = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
`;

const toastContainer = keyframes`
  0% {
    opacity: 0.9;
  }
  20% {
    opacity: 0.9;
  }
  90% {
    opacity: 0.9;
  }
  100% {
    opacity: 0;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 40px;
  right: 0;
  width: 280px;
  z-index: 99999;
`;

const infoToastStyle = css`
  background-color: #084298;
  color: white;
`;

const successToastStyle = css`
  background-color: #61c23a;
  color: white;
`;

const errorToastStyle = css`
  background-color: #da4347;
  color: white;
`;

const ToastWrapper = styled.div<{
  type: 'success' | 'error' | 'info';
  duration: number;
}>`
  position: relative;
  border-radius: 5px;
  margin-bottom: 15px;
  transition: all 1s;
  transform: translateY(15%);
  overflow: hidden;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  ${({ type }) => {
    const style = {
      success: successToastStyle,
      error: errorToastStyle,
      info: infoToastStyle,
    };
    return style[type];
  }}
  ${({ duration }) => css`
    animation: ${toastContainer} linear ${duration / 1000}s forwards;
  `};
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Contents = styled.div`
  flex: 1;
  padding: 0 5px;
`;

const Title = styled.h3`
  font-size: 1rem;
  margin-bottom: 2px;
`;

const Message = styled.p`
  font-size: 0.8rem;
`;

const Progress = styled.div<{
  duration: number;
}>`
  width: 100%;
  height: 4px;
  background-color: white;
  ${({ duration }) => css`
    animation: ${toastProgress} linear ${duration / 1000}s forwards;
  `};
`;

const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  position: absolute;
  right: 8px;

  background: none;
  border: none;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  &:before, &:after {
    position: absolute;
    content: '';
    height: 100%;
    width: 1.5px;
    background-color: white;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export default {
  Container,
  ToastWrapper,
  Body,
  Contents,
  Title,
  Message,
  Progress,
  CloseBtn,
};