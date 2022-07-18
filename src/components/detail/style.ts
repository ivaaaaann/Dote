import styled, { css } from "styled-components";

export const DetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  justify-content: space-between;
`;

export const DetailSubmitButton = styled.button<{
  direction: "left" | "right";
}>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 150px;
  height: 56px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.contrast};
  border: 1px solid ${({ theme }) => theme.contrast};
  cursor: pointer;
  color: ${({ theme }) => theme.subBackgroundColor};

  ${({ direction }) =>
    direction === "left"
      ? css`
          bottom: 20px;
          left: 20px;
        `
      : css`
          bottom: 20px;
          right: 20px;
        `}

  @media screen and (max-width: 450px) {
    width: 100px;
    height: 50px;
  }
`;
