import styled from "styled-components";

export const PageTemplateContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  margin: 0px auto;
  background-color: ${({ theme }) => theme.subBackgroundColor};
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
`;

export const PageTemplateWrap = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  padding: 0px 20px;
`;
