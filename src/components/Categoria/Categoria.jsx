import styled from "styled-components";
import Titulo from "../Titulo/Titulo";
import { useState } from "react";

// import Slider from "../Slider/Slider";
import Slider from "../Slider/Slider";


const Div = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     gap: 3rem;

     @media (max-width: 768px) {
         flex-direction: column;
     }
 `;




const Categoria = (props) => {


    const { titulo, colorPrimario, descripcion  } = props.datos;
    
    const { videos, eliminarVideo, categorias } = props;

    return <>

        {videos.length > 0 &&
            <section className="contenedor">
                
                <Titulo  titulo={titulo} descripcion={descripcion} colorPrimario={{colorPrimario}}/>



                <Div>
                    <Slider colorPrimario={colorPrimario} videos={videos}  categorias={categorias} eliminarVideo={eliminarVideo} />
                </Div>


            </section>
        }
    </>
}

export default Categoria;