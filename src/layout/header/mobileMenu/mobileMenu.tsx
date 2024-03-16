import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../../styles/Theme';
import { blob } from 'stream/consumers';

export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuWrapper isOpen={false}>
                <ul>
                    {props.menuItems.map((item: string, index: number) => {
                        return (
                            <ListItem key={index}>
                                <Link href="">
                                    {item}
                                    <Mask>
                                        <span>{item}</span>
                                    </Mask>
                                    <Mask>
                                        <span>{item}</span>
                                    </Mask>
                                </Link>
                            </ListItem>
                        )
                    })}
                </ul>
            </MobileMenuWrapper>

        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display:none;

    @media ${theme.media.tablet} {
        display: block;
        
    }
`

const MobileMenuWrapper = styled.div<{isOpen: boolean}>`
    position:fixed;
    background-color: rgba(31,31,32,0.9);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index:99999;
    display:none;


    ${props => props.isOpen && css<{isOpen: boolean}>`
        display:flex;
        justify-content:center;
        align-items:center;
    `}
    
ul {
        display:flex;
        gap:30px;
        flex-direction:column;
        align-items:center;
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position:fixed;
    top:-100px;
    right:-100px;
    width: 200px;
    height: 200px;

    span{
        display:block;
        width: 36px;
        height:2px;
        background-color: ${theme.colors.text};
        position:absolute;
        left:40px;
        bottom:50px;

        ${props => props.isOpen  && css<{isOpen: boolean}>`
        background-color:rgba(255,255,255,0);
    `}
       

        &::before{
            content:'';
            display:block;
            background-color: ${theme.colors.text};
            width: 36px;
            height: 2px;
            position:absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform:rotate(-45deg) translateY(0);
            `}
        }


        &::after{
            content:'';
            display:block;
            background-color: ${theme.colors.text};
            width: 24px;
            height: 2px;
            position:absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform:rotate(45deg) translateY(0);
                width: 36px;
            `}
    }
}
`


const Link = styled.a`
color: rgb(117, 114, 213);
font-family: 'Josefin Sans', sans-serif;
font-size: 25px;
font-weight: 400;
text-align: center;
color:transparent;
`

const Mask = styled.span`
    position:absolute;
    top:0;
    left:0;
    display: inline-block;
    height: 50%;
    overflow:hidden;
    color:${theme.colors.text};

    & + &{
        top:50%;
        span{
            display:inline-block;
            transform:translateY(-50%);
        }
    }
    `

const ListItem = styled.li`
position:relative;

&::before{
    content:'';
    display:inline-block;
    height: 2px;
    background-color: ${theme.colors.accent};
    position:absolute;
    top:50%;
    left:0px;
    right:-10px;
    z-index:1;
    
    transform:scale(0);
}

&:hover{

    &::before{
        transform:scale(1);
    }
    ${Mask} {
        transform:skewX(12deg) translateX(5px);
        color:${theme.colors.text};
    }
    & + ${Mask} {
        transform:skewX(12deg) translateX(-5px);
    }
}
`