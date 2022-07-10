import React from "react";
import styled from "styled-components";

interface CustomInputProps {
  placeholder?: string;
  type?: string | undefined;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  style?: React.CSSProperties;
  passwordInput?: React.RefObject<HTMLInputElement>;
  maxLength?: number;
  onClick?: () => Promise<void> | void;
}

const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 16px;
  transition: 0.6s;
  border: none;
  border-bottom: 1px solid #ccc;
  background-color: transparent;
  color: ${({ theme }) => theme.contrast};
  &:focus {
    outline: none;
    border-bottom: 1px solid #28a2a2;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const CustomInput = ({
  placeholder,
  type,
  value,
  setValue,
  style,
  passwordInput,
  maxLength,
  onClick,
}: CustomInputProps) => {
  return (
    <>
      <Input
        style={style}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue && setValue(e.target.value)}
        ref={passwordInput}
        maxLength={maxLength}
        onClick={onClick}
      />
    </>
  );
};

export default CustomInput;
