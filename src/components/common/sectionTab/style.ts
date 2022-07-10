import styled, { css } from "styled-components";

export const SectionTabContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  column-gap: 5px;
  margin-bottom: 20px;

  @media screen and (max-width: 450px) {
    justify-content: space-evenly;
  }
`;

export const SectionTabItem = styled.div<{ isSelected: boolean }>`
  width: 100px;
  height: 100%;
  color: ${({ theme }) => theme.contrast};
  padding: 20px;
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected
      ? css`
          border-bottom: 3px solid ${({ theme }) => theme.contrast};
        `
      : css`
          border: 0px;
        `}
`;
