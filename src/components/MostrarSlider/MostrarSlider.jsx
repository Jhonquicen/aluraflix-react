
import { Link } from "react-router-dom";
import styled from "styled-components";

const Mostrar = styled.div`
    display: flex;
    background-color: black;
`;

const Img = styled.img`
     max-width: 100%;
     
     width: 40rem;
 `;



const MostrarSlider = (props) => {

    const { link, imagen, colorTitulo, id } = props.datos;
    
    

    const colorTitulos = {
        color: colorTitulo
      }

    return (
       
            
            <Mostrar >
                
                <div></div>
                
                
                <div style={{  display: 'flex', alignItems: 'center',  width: "1250px", border: "2px solid black"}}>
                    <Link to={link} target="_blank" rel="noreferrer" >
                        <Img src={imagen} alt="Miniatura Video"  />
                        
                    </Link >

                </div>
            
            
            </Mostrar>
        

    )
}


export default MostrarSlider;