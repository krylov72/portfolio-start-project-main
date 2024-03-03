import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/skills/SectionTitle';
import { Menu } from '../../../components/menu/Menu';
import { FlexContainer } from '../../../components/FlexContainer';
import { Work } from './work/Work';
import works1 from '../../../assets/images/works 6.webp';
import works2 from '../../../assets/images/works 3.webp';

const worksitems = ["All", "Landing page", "React", "Spa"]


export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksitems}/>
            <FlexContainer justify='center'>
                <Work 
                title = 'Social network' 
                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.' 
                src={works1}/>
                <Work 
                title = 'Timer' 
                text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim' 
                src={works2}/>
            </FlexContainer>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height:100vh;
    background-color: #8bd6f3;
`