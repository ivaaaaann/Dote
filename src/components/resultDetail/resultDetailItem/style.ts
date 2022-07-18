import styled from "styled-components";

export const ResultDetailItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const ResultDetailItemName = styled.span`
  max-width: 70px;
  min-width: 70px;
  font-size: 14px;
  color: ${({ theme }) => theme.contrast};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ResultDetailItemChart = styled.div<{ vote_count: number }>`
  width: ${({ vote_count }) => `calc(10px + ${0.4 * vote_count}% )`};
  height: 20px;
  background-color: ${({ theme }) => theme.contrast};
  color: ${({ theme }) => theme.contrast};
  display: flex;
  align-items: center;
  column-gap: 10px;
  transition: 0.5;
`;

export const ResultDetailItemPoint = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.contrast};
`;
