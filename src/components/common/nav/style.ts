import styled, { css } from "styled-components";

export const NavContainer = styled.div<{ isScroll: boolean }>`
  width: 480px;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  position: fixed;
  top: 0px;
  background-color: white;
  transition: 1s;

  ${({ isScroll }) =>
    isScroll
      ? css`
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        `
      : css`
          background-color: white;
        `}
`;

export const NavTitle = styled.h1`
  font-size: 25px;
  color: #0067bcd9;
  font-weight: bold;
`;
