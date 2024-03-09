import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Works } from './layout/sections/works/Works';
import { Testimony } from './layout/sections/testimony/Testimony';
import { Contacts } from './layout/sections/contacts/Contacts';
import mainbg from './assets/images/bgfirst.webp';


function App() {
    return (
        <MainSection>
            <Wrapper>
                <Header />
                <Main />
            </Wrapper>
            <Skills />
            <Works />
            <Testimony />
            <Contacts />
        </MainSection>
    );
}

export default App;

const MainSection = styled.section`

`

const Wrapper = styled.div`
    background-image:url(${mainbg});
    background-size:cover;
`
