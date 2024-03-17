import React from 'react';
import styled from 'styled-components';
import { FlexContainer } from '../../../components/FlexContainer';
import { Icon } from '../../../components/icons/Icon';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { IconWrapper } from '../skills/skill/Skill';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <FlexContainer direction='row' align='center' justify='space-between' wrap='wrap'>
                    <ContactsBox>
                        <ContactsText>Let’s Connect</ContactsText>
                        <ContactsIcon>
                            <Icon iconId='xzSvg' width='25px' height='25px' />
                            <Icon iconId='fbSvg' width='25px' height='25px' />
                            <Icon iconId='ytSvg' width='25px' height='25px' />
                            <Icon iconId='igSvg' width='25px' height='25px' />
                            <Icon iconId='twitterSvg' width='25px' height='25px' />
                        </ContactsIcon>
                    </ContactsBox>
                    <StyledForm>
                        <FieldText>Your name:</FieldText>
                        <Field placeholder='Name' />
                        <FieldText>Your email address:</FieldText>
                        <Field placeholder='Email' />
                        <FieldText>Tell about the project:</FieldText>
                        <Field as={'textarea'} placeholder='About project' />
                        <Button type='submit'>Send</Button>
                    </StyledForm>
                </FlexContainer>
            </Container>
        </StyledContacts >
    );
};

const StyledContacts = styled.section`
    background-color: rgb(0,0,0);
    min-height:50vh;
    display:flex;
    justify-content:center;
`

const ContactsBox = styled.div`
    max-width:438px;
`

const ContactsText = styled.p`
${font({family:"'Poppins',sans-serif", weight:700,Fmax:100,Fmin:50, lineHeight:'120%'})}
margin-bottom:31px;

@media ${theme.media.mobile} {
    text-align:center;
}
`

const ContactsIcon = styled.div`
    display:flex;
    column-gap:50px;
    @media ${theme.media.mobile} {
        column-gap:30px;
        justify-content:center;
        margin-bottom:10px;
        
    }
`
const StyledForm = styled.form`
    max-width:500px;
    width:100%;
    display:flex;
    flex-direction:column;

    legend{
        color:#ffffff;
    }

    ${Button} {
            text-align:left;

        &::before{
            left:0;
            transform:translateX(0);
            width:50%;
            margin-left:-5px;
            border-radius:0 20px 20px 0;
        }
    }

    
`
const Field = styled.input`
    border:none;
    background-color: transparent;
    color:white;
    outline:none;
    resize:none;
    overflow:auto;
    border-bottom: 1px solid ${theme.colors.text};
    margin: 50px 0 40px;

`
const FieldText = styled.legend`
    ${font({family:"'Poppins',sans-serif", weight:400,Fmax:25,Fmin:18})}
    text-align: left;
`