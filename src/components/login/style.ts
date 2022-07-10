import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 80vw;
  margin: 100px auto;
  padding: 0px 20px;
  height: 200px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
`;

export const LoginBtn = styled.button`
  border-radius: 5px;
  font-size: 20px;
  padding: 14px 80px;
  cursor: pointer;
  color: ${({ theme }) => theme.contrast};
  background-color: ${({ theme }) => theme.backgroundColor};
  font-size: 1.5rem;
  font-family: 'Roboto';
  font-weight: 100;
  border: 1px solid #fff; 
  transition-duration: 0.5s; 
  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;

  :active {
  transition-delay: 0s;
}
`