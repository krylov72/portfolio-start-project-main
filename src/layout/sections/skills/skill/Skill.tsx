
import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icons/Icon';
import { FlexContainer } from '../../../../components/FlexContainer';
import { theme } from '../../../../styles/Theme';

type SkillPropsType = {
    iconId: string
    title: string
    desc: string

}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexContainer direction='column' align='center'>
            <IconWrapper>
            <Icon width='50px' height='50px'   iconId={props.iconId} />
            </IconWrapper>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillDesc>{props.desc}</SkillDesc>
            </FlexContainer>
        </StyledSkill>
    );
};


export const StyledSkill = styled.div`
    width:380px;    
    padding:62px 20px 40px;
`

export const SkillTitle = styled.h3`
    margin:70px 0 15px;
    text-transform:uppercase;

    color:${theme.colors.text};
`
export const SkillDesc = styled.p`
text-align:center;

color:${theme.colors.text};
    
`

export const IconWrapper = styled.div`
    position:relative;

    &::before {
        content: '';
        display:inline-block;
        width:80px;
        height:80px;
        transform: rotate(45.00deg) translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.1);
        position:absolute;
        top:45%;
        left:47%;
        transform-origin: top left;
    }
`