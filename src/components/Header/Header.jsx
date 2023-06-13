import React from "react";
import styled from "styled-components";
import { Boton } from "../UI";

import { Link, useResolvedPath } from "react-router-dom";


const Barra = styled.header`
        background-color: #000;
        height: 90px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 4rem;

        @media (max-width: 768px) {
            flex-direction: column;
            height: 15rem;
        }
    `;


const Header = () => {

    const url = useResolvedPath().pathname;

    return (
        <Barra>
            <Link to={"/"}>
                < img src="/img/image 1.png" />
            </Link>

            {url === '/'
                ?
                <Link to={"/video"}>
                    <Boton>Nuevo Video</Boton>
                </Link>
                :
                null
            }


        </Barra>
    )
}


export default Header;