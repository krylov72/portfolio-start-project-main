import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Container } from '../../components/Container';
import { FlexContainer } from '../../components/FlexContainer';
import { HeaderMenu } from './headerMenu/HeaderMenu';
import { MobileMenu } from './mobileMenu/mobileMenu';
import { theme } from '../../styles/Theme';



const itemsmenu = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
                <FlexContainer justify='space-between' align='center'>
                    <Logo />
                    <HeaderMenu menuItems={itemsmenu} />
                    <MobileMenu menuItems={itemsmenu} />
                </FlexContainer>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`

    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:99999;
    margin:60px 80px 0 80px;
    
    @media ${theme.media.tablet} {
        margin:0;
        top:25px;
        left:10px;
    }

`