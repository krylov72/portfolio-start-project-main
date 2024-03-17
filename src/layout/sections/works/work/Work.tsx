import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../components/Link';
import { theme } from '../../../../styles/Theme';
import { Button } from '../../../../components/Button';
import { font } from '../../../../styles/Common';

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
            <Image src={props.src} alt='' />
            <Button>view project</Button>
            </ImageWrapper>
            <Description>
                <WorkTitle>{props.title}</WorkTitle>
                <WorkText>{props.text}</WorkText>
                <Link href={"#"}>demo</Link>
                <Link href={"#"}>code</Link>
            </Description>
        </StyledWork>
    );
};

const StyledWork = styled.div`
max-width:540px;
width:100%;
background-color: ${theme.colors.secondaryBg};

${Link} {
padding: 10px 0;

& + ${Link}  {
    margin-left: 20px;
}
}
`
const ImageWrapper = styled.div`
    position:relative;

    &:hover {

        ${Button} {
            opacity:1;
        }
        &::before{
        content: '';
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        backdrop-filter: blur(8px);
        background: rgba(0, 0, 0, 0.3);
    }
    }

    ${Button} {
        opacity:0;
        position:absolute;
        left:50%;
        top:50%;
        transform: translate(-50%);
        z-index:0;

        &::before{
            width: 100%;
            height: 100%;
            z-index:-1;
        }
    }
`

const Image = styled.img`
width:100%;
height:260px;
object-fit:cover;
`


const WorkTitle = styled.h3`
text-transform:capitalize;

${font({family:"'Josefin Sans', sans-serif", weight:700, Fmax:16, Fmin:12})}


`
const WorkText = styled.p`
    margin:14px 0 10px;

    ${font({family:"'Poppins', sans-serif", weight:300, Fmax:16, Fmin:10})}
`

const Description = styled.div`
    padding:25px 20px;
`

