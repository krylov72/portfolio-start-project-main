

import React from 'react';
import { SectionTitle } from '../../../components/skills/SectionTitle';
import { Button } from '../../../components/Button';
import styled from 'styled-components';
import { FlexContainer } from '../../../components/FlexContainer';

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>I Am Available For Freelance</SectionTitle>
            <FlexContainer justify='center'>
                <Button>hire me</Button>
            </FlexContainer>
        </StyledSlogan>
    );
};


const StyledSlogan = styled.section`
    background-color: #8b7f7f;
    height:30vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
`