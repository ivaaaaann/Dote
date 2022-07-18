import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    
    #date{
        border:none;
        margin-top:10px;
    }
`
export const CreateBtn = styled.button`
    border-radius: 5px;
    width:70px;
    font-size: 16px;
    cursor: pointer;
    color: ${({ theme }) => theme.subBackgroundColor};
    background-color: ${({ theme }) => theme.contrast};
    font-family: 'Roboto';
    font-weight: 100;
    border: none;
`

export const AddBtn = styled.button`
    background-color:transparent;
    border:none;
    margin-top: 10px;
`
export const VoteInput = styled.input`
    background-color: ${({ theme }) => theme.contrast};
    color:${({ theme }) => theme.subBackgroundColor};
    outline:none;
    width:100%;
    margin-top:7px;
    font-size:14px;
    border-radius:20px;
    height:30px;
    border:1px solid #fff;
    padding:10px;
    
    ::placeholder{
        color:${({ theme }) => theme.subBackgroundColor};
    }
`

export const DeleteBtn = styled.button`
    background-color:transparent;
    border:none;
`