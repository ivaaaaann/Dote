import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 80vw;
  margin: 100px auto;
  padding: 0px 20px;
  height: 200px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

export const LoginBtn = styled.button`
  border-radius: 5px;
  font-size: 20px;
  padding: 14px 80px;
  word-break:keep-all;
  cursor: pointer;
  color: ${({ theme }) => theme.backgroundColor};
  background-color: ${({ theme }) => theme.contrast};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 100;
  border: none; 
  transition-duration: 0.5s; 
  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;

  :active {
  transition-delay: 0s;
}
`