import React from 'react';
import styled from 'styled-components';
import bgfirst from '../../../assets/images/bgfirst.webp';
import { FlexContainer } from '../../../components/FlexContainer';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';


export const Main = () => {
    return (
        <MainSection>
            <Container>
                <FlexContainer direction='column' align='flex-start' wrap='wrap'>
                    <WelcomeText>hi! everyone</WelcomeText>
                    <Name><span>Chris Lee</span> brand designer</Name>
                    <MainText>Make designs mainly logos, visual identities, apps & websites, social media and magazines.</MainText>
                    <ButtonStyled>
                        <button>get in touch</button>
                    </ButtonStyled>
                </FlexContainer>
            </Container>

        </MainSection>
    );
};


const MainSection = styled.section`
min-height:100vh;
display:flex;
align-items:center;

${FlexContainer} {
    max-width:755px;
}
`
const Photo = styled.img`

`
const ButtonStyled = styled.div`
    button {
        color:${theme.colors.text};
        font-family: "Josefin Sans", sans-serif;
        font-size: 19px;
        text-align: center;
        text-transform: uppercase;
        box-sizing: border-box;
        border: 1px solid rgb(255, 255, 255);
        width: 254px;
        height: 81px;  
        
        @media ${theme.media.mobile}{
            width:200px;
            height:50px;
        }
        
        &:hover{
            animation:new 1s ease-in-out;
            animation-fill-mode:forwards;
            @keyframes new {
                0% {
                    width: 254px;
                    height: 81px;
                }
                100% {
                    width: 200px;
                    height: 70px;
                }
            }
        }

        &:not(:hover){
            animation: newback 1s ease-in-out;
            @keyframes newback {
                0% {
                    width: 200px;
                    height: 70px;
                }
                100% {
                    width: 254px;
                    height: 81px;
                }
            }
            }
        }
    
`

const WelcomeText = styled.span`
    background: ${theme.colors.textBgMain};
    ${font({family:"'Josefin Sans',sans-serif", weight:400,Fmax:18,Fmin:15})}
    padding:5px;
    text-transform: uppercase;
    `

const Name = styled.h1`
    ${font({family:"'Josefin Sans',sans-serif", weight:700,Fmax:95,Fmin:45})}
    text-align: left;
    text-transform: capitalize;
    margin:50px 0;

    span{
        position:relative;
        z-index:0;
        &::before{
            content:'';
            display:inline-block;
            width:100%;
            height:20px;
            background-color:${theme.colors.accent};
            position:absolute;
            bottom:5px;
            z-index:-1;

            @media ${theme.media.tablet} {
                height:10px;
                bottom:10px;
            }
        }
    }
`

const MainText = styled.span`
    ${font({family:"'Josefin Sans',sans-serif", weight:400,Fmax:24,Fmin:20})}
    text-align: left;
    margin-bottom:70px;
`