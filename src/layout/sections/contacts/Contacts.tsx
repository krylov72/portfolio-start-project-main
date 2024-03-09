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
                    <FieldText>Your name:</FieldText>
                    <Field placeholder='Name' />
                    <FieldText>Your email address:</FieldText>
                    <Field placeholder='Email' />
                    <FieldText>Tell about the project:</FieldText>
                    <Field as={'textarea'} placeholder='About project' />
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

    legend{
        color:#ffffff;
    }

    
`
const Field = styled.input`
    
`
const FieldText = styled.legend`
    
`