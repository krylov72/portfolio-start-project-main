import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/skills/SectionTitle';
import { Icon } from '../../../components/icons/Icon';
import { Slider } from '../slider/Slider';
import { FlexContainer } from '../../../components/FlexContainer';

export const Testimony = () => {
    return (
        <StyledTestimony>
            <FlexContainer direction={'column'} align='center'>
                <SectionTitle>Testimony</SectionTitle>
                <Icon iconId={'quote'} width='50' height='50' />
                <Slider />
            </FlexContainer>

        </StyledTestimony>
    );
};


const StyledTestimony = styled.section`
    background-color: #816d6d;
`