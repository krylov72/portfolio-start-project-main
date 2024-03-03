import React from 'react';
import styled from 'styled-components';

type WorkPropsType = {
title: string
text: string
src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt='' />
            <WorkTitle>{props.title}</WorkTitle>
            <WorkText>{props.text}</WorkText>
            <Link href={"#"}>demo</Link>
            <Link href={"#"}>code</Link>

        </StyledWork>
    );
};

const StyledWork = styled.div`
background-color: #9685f7;
max-width:540px;
width:100%;
`
const Image = styled.img`
width:100%;
height:260px;
object-fit:cover;
`

const Link = styled.a`

`

const WorkTitle = styled.h3`

`
const WorkText = styled.p`

`