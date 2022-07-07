import styled, { css } from "styled-components";

export const NavContainer = styled.div<{ isScroll: boolean }>`
  width: 100%;
  height: 70px;
  padding: 0px 20px;
  position: fixed;
  top: 0px;
  background: transparent;
  transition: all 0.3s ease;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ isScroll }) =>
    isScroll
      ? css`
          background-color: ${({ theme }) => theme.subBackgroundColor};
        `
      : css`
          background: transparent;
        `}
`;

export const NavTitle = styled.h1`
  font-size: 25px;
  color: ${({ theme }) => theme.contrast};
  font-weight: bold;
`;

export const NavDarkmodeButton = styled.button`
  width: 35px;
  height: 35px;
  background: transparent;
  border: 0px;
  outline: none;
  font-size: 30px;
  color: ${({ theme }) => theme.contrast};
`;
