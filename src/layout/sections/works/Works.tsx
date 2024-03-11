import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/skills/SectionTitle';
import {TabMenu } from './tabMenu/TabMenu';
import { FlexContainer } from '../../../components/FlexContainer';
import { Work } from './work/Work';
import works1 from '../../../assets/images/works 6.webp';
import works2 from '../../../assets/images/works 3.webp';
import { Container } from '../../../components/Container';

const worksitems = ["All", "Landing page", "React", "Spa"]


export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksitems} />
                <FlexContainer justify='space-between' align='flex-start'>
                    <Work
                        title='Social network'
                        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                        src={works1} />
                    <Work
                        title='Timer'
                        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'
                        src={works2} />
                </FlexContainer>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`

`