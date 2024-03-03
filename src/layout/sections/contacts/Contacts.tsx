import React from 'react';
import styled from 'styled-components';
import { FlexContainer } from '../../../components/FlexContainer';
import { Icon } from '../../../components/icons/Icon';
import { Button } from '../../../components/Button';

export const Contacts = () => {
    return (
        <StyledContacts>
            <FlexContainer direction='row' align='center' justify='space-evenly'>
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
                    <Field placeholder='Your name:' />
                    <Field placeholder='Your email address:' />
                    <Field as={'textarea'} placeholder='Tell about the project:' />
                    <Button type='submit'>Send<span><Icon iconId='arrowRight' width='30' height='30' /></span></Button>
                </StyledForm>
        </FlexContainer>
        </StyledContacts >
    );
};

const StyledContacts = styled.section`
    background-color: rgb(0,0,0);
    min-height:50vh;
`

const ContactsBox = styled.div`
    
`

const ContactsText = styled.p`
color:#ffffff;
`

const ContactsIcon = styled.div`
    
`
const StyledForm = styled.form`
    max-width:500px;
    width:100%;
    display:flex;
    flex-direction:column;

    
`
const Field = styled.input`
    
`