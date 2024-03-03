import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';



const itemsmenu = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu menuItems={itemsmenu} />
            
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-color:#4ebb5c;
    display:flex;
    justify-content:space-between;
`