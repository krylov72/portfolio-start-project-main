import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const Link = styled.a`
    ${font({family:"'Poppins', sans-serif", weight:400, Fmax:14, Fmin:10})}
    letter-spacing: 1px;
    text-transform: uppercase;
    padding:10px;
    position:relative;
    z-index:0;

    &:hover {
        &::before{
            height:7px;
        }
    }

    &::before{
        content: '';
        display:inline-block;
        

        position:absolute;
        bottom:10px;
        left:0;
        right:0;
        background-color: ${theme.colors.accent};
        z-index:-1;
    }  
`