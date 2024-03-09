import React from 'react';
import styled from 'styled-components';
import bgfirst from '../../../assets/images/bgfirst.webp';
import { FlexContainer } from '../../../components/FlexContainer';


export const Main = () => {
    return (
        <MainSection>
            <FlexContainer direction='column' align='flex-start'>
                <WelcomeText>hi! everyone</WelcomeText>
                <Name>Chris Lee brand designer</Name>
                <MainText>Make designs mainly logos, visual identities, apps & websites, social media and magazines.</MainText>
                <ButtonStyled>
                    <button>get in touch</button>
                </ButtonStyled>
            </FlexContainer>
        </MainSection>
    );
};


const MainSection = styled.section`

min-height:50vh;
display:flex;
align-items:center;
`
const Photo = styled.img`
    
`
const ButtonStyled = styled.section`

`

const WelcomeText = styled.span`
    color:#ffffff;
`

const Name = styled.h1`
    color:#ffffff;
`

const MainText = styled.span`
    color:#ffffff;
`