import styled from "styled-components";


const Title = styled.h1`
    max-width: 100%;
    color: white;
    padding: 1rem;
    display: inline;
    
    

    @media (max-width: 1035px) {
        font-size: 1.5rem;
    }
    `;

const Div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0;
    }
`;

const Descripcion = styled.p`
    color: #9255559d;
    font-weight: 200;
    font-size: 1.8rem;
    margin: 0;

    @media (max-width: 768px) {
        margin-bottom: 2rem;
    }
`

const Titulo = ({ colorFondo, titulo, descripcion }) => {

    return (
    <Div>
        <Title style={{ backgroundColor: colorFondo }} >{titulo}</Title>
        <Descripcion >{descripcion}</Descripcion>
        
    </Div>

    )
}

export default Titulo;