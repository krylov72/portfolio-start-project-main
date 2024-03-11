import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
    color: ${theme.colors.text};
    font-family: 'Poppins',sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    width: 170px;
    height: 32px;
    position:relative;
    z-index:0;

    &:hover{
        &::before{
            height:100%;
            width:100%;
            z-index:-1;
        }
    }



    &::before {
        content:'';
        display:inline-block;
        height:7px;
        width:50%;
        background-color: ${theme.colors.accent};
        position:absolute;
        bottom:0;
        left:50%;
        transform:translateX(-50%);
    }
`
    