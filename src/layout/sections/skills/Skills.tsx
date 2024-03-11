import React from 'react';
import { FlexContainer } from '../../../components/FlexContainer';
import { SectionTitle } from '../../../components/skills/SectionTitle';
import { Skill } from './skill/Skill';
import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexContainer wrap='wrap' justify='space-between' align='center'>
                    <Skill iconId={'code'} title={'html5'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
                    <Skill iconId={'html'} title={'css3'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
                    <Skill iconId={'react'} title={'react'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
                    <Skill iconId={'typescript'} title={'typescript'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
                    <Skill iconId={'styledcomp'} title={'styled components'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
                    <Skill iconId={'figma'} title={'web design'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
                </FlexContainer>
            </Container>
        </StyledSkills>
    );
};


const StyledSkills = styled.section`
`
