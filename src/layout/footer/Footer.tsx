import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icons/Icon';
import { FlexContainer } from '../../components/FlexContainer';

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexContainer direction='column' align='center'>
                <Name>Denis</Name>
                <SocialList>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon iconId='xzSvg' width='21' height='21' />
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon iconId='ytSvg' width='21' height='21' />
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon iconId='igSvg' width='21' height='21' />
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon iconId='fbSvg' width='21' height='21' />
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon iconId='xzSvg' width='21' height='21' />
                        </SocialIconLink>
                    </SocialItem>
                </SocialList>
                <Copyright>#Created by Denis | All Reserved!</Copyright>
            </FlexContainer>

        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    background-color: rgb(215,200,300);
`
const Name = styled.span`
    
`
const SocialList = styled.ul`
    display:flex;
    list-style:none;
`
const SocialItem = styled.li`
    
`
const SocialIconLink = styled.a`
    
`
const Copyright = styled.small`
    
`