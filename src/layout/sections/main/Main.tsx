import React from 'react';
import styled from 'styled-components';
import bgfirst from '../../../assets/images/bgfirst.webp';
import { FlexContainer } from '../../../components/FlexContainer';
import mainbg from '../../../assets/images/bgfirst.webp';

export const Main = () => {
    return (
        <MainSection>
            <FlexContainer align={'center'} justify={'space-around'} wrap={'wrap'} direction={'column'}>
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
background-image:url(${mainbg});
background-size:cover;
`
const Photo = styled.img`
    
`
const ButtonStyled = styled.section`

`

const WelcomeText = styled.span`
    
`

const Name = styled.h1`
    
`

const MainText = styled.span`
    
`