
import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icons/Icon';

type SkillPropsType = {
    iconId: string
    title: string
    desc: string

}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon width='50px' height='50px'  iconId={props.iconId} />
            <SkillTitle>{props.title}</SkillTitle>
            <SkillDesc>{props.desc}</SkillDesc>
        </StyledSkill>
    );
};


export const StyledSkill = styled.div`
    width:33%;
    text-align:center;
    background-color: #7a7676;
    margin-top:10px;
`

export const SkillTitle = styled.h3`
    
`
export const SkillDesc = styled.p`
    
`