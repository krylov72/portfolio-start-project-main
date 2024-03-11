import styled from "styled-components";
import { theme } from "../../styles/Theme";

type SectionTitlePropsType = {
    title?: string
}

export const SectionTitle = styled.h2 <SectionTitlePropsType>`
    position:relative;
    color:${theme.colors.text};
    text-align:center;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 36px;
    font-weight: 600;
    letter-spacing: 5px;
    text-align: left;
    display:flex;
    justify-content:center;
    margin-bottom:90px;
    &::before {
        content:'';
        display:inline-block;
        width:55px;
        height:1px;
        background-color: ${theme.colors.accent};
        position:absolute;
        left:50%;
        transform: translateX(-50%);
        bottom:-30px;
    }
`