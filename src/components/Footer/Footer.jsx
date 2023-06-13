import { Link } from "react-router-dom";
import styled from "styled-components";


const FooterIntro = styled.footer`
    
    height: 82px;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center
`;

const Imagen = styled.img`
    height: 4rem;
    width: 16.8rem;
`;

const Footer = () => {

    return (
        <FooterIntro>
        <Link to={"/"}>
                < img src="/img/image 1.png" />
            </Link>
            

        </FooterIntro>
    )
}


export default Footer;