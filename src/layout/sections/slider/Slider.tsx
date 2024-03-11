

import React from 'react';
import styled from 'styled-components';
import { FlexContainer } from '../../../components/FlexContainer';
import { theme } from '../../../styles/Theme';

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexContainer>
                <Slide>
                    <SlideText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</SlideText>
                    <SlideName>@ivan ivanow</SlideName>
                </Slide>
            </FlexContainer>
            <Pagination>
                <span> </span>
                <span className={'active'}> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width:500px;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Slide = styled.div`
    text-align:center;
`

const SlideText = styled.p`
    
`

const SlideName = styled.span`
    color: ${theme.colors.text};
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    margin:22px 0 42px;
    display:inline-block;
`
const Pagination = styled.div`
    span {
        display:inline-block;
        width: 7px;
        height: 7px;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.5);

        &+span{
            margin-left:5px;
        }

        &.active{
            background-color: ${theme.colors.accent};
            width:20px;
        }
    }
`