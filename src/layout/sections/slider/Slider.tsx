

import React from 'react';
import styled from 'styled-components';
import { FlexContainer } from '../../../components/FlexContainer';

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
                <span> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    border:1px solid red;
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
    
`
const Pagination = styled.div`
    span {
        display:inline-block;
        width: 10px;
        height: 10px;
        margin:5px;
        background-color: #ffa3ba;
    }
`