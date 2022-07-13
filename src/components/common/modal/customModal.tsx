import React, { Dispatch, ReactNode, SetStateAction } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  color: ${({ theme }) => theme.contrast};
  height: auto;
  min-height: 50px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 10px;
`;

const CloseBtn = styled.button`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.contrast};
  border: none;
  outline: none;
  background-color: transparent;
`;

interface Props {
  children?: ReactNode;
  closeModal?: Dispatch<SetStateAction<boolean>>;
}

const CustomModal: React.FC<Props> = ({ children, closeModal }) => {
  return (
    <Container>
      <CloseBtn
        onClick={() => {
          closeModal && closeModal(false);
        }}
      >
        <AiOutlineClose size={"20px"} />
      </CloseBtn>
      {children}
    </Container>
  );
};

export default CustomModal;
