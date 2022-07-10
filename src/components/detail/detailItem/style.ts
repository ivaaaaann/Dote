import styled, { css } from "styled-components";

export const DetailItemContainer = styled.button<{ isSelected: boolean }>`
  width: 49%;
  height: 180px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  outline: none;
  padding: 20px;

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      border: 1px solid ${theme.contrast};
    `}
`;

export const DetailItemText = styled.span`
  font-size: 24px;
  color: ${({ theme }) => theme.contrast};
`;
