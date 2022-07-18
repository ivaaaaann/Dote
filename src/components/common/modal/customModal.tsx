import React, { Dispatch, ReactNode, SetStateAction } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  children?: ReactNode;
  closeModal?: Dispatch<SetStateAction<boolean>>;
  visible?: boolean;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 100px auto;
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

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const CustomModal: React.FC<Props> = ({ children, closeModal }) => {
  return (
    <ModalOverlay>
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
    </ModalOverlay>
  );
};

export default CustomModal;
