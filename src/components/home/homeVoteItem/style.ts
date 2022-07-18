import styled from "styled-components";

export const HomeVoteItemContainer = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.backgroundColor};
  cursor: pointer;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.contrast};

  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

export const HomeVoteItemTitle = styled.h1`
  font-size: 25px;
  color: ${({ theme }) => theme.contrast};
  display: flex;
  align-items: center;
`;

export const HomeVoteItemTimeWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const HomeVoteItemTime = styled.span`
  font-size: 15px;
  color: ${({ theme }) => theme.contrast};
`;
