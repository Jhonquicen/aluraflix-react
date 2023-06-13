import "./nuevoVideo.css"
import React from "react";
import TextField from '@mui/material/TextField';
import styled from "styled-components";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

import { useState } from "react";


import { validarTitulo, validarLink, validarDescripcion } from "../../components/validaciones";

import { Navigate } from "react-router-dom";

import Botones from "../../components/Boton/Botones";

import Texto from "../../components/CampoTexto";





const CssTextField = styled(TextField)({
    '& label': {
        color: '#fff',
        fontSize: '1.5rem'
    },
    '& color': {
        color: "#fff"
    }
});

const CssSelect = styled(Select)({
    '& label': {
        color: '#fff',
    }
});


const styles = {
    backgroundColor: '#5c5c5c',
    borderRadius: '1rem',
    margin: '3rem 0',
    color: '#fff'
}


const NuevoVideo = (props) => {

    const { guardarVideo } = props;

    
    const [titulo, setTitulo] = useState("");
    const [link, setLink] = useState("");
    const [imagen, setImagen] = useState({ value: '', valid: null });
    const [categoria, setCategoria] = useState('');
    const [descripcion, setDescripcion] = useState({ value: '', valid: null });


    
    const [redirect, setRedirect] = useState(false);

    const handleChange = (e) => {
        setCategoria(e.target.value);
    };


    function manejarNuevoVideo(e) {
        e.preventDefault();

        guardarVideo({
            titulo: titulo.value,
            categoria,
            descripcion: descripcion.value,
            link: link.value,
            imagen: imagen.value
        });

        

        setTimeout(() => {
            
            setRedirect(true)
        }, 1000);
    }

    async function reset() {
        const valor = '';

        try {
            setLink({ value: valor, valid: null });
            setTitulo({ value: valor, valid: null });

            setImagen({ value: valor, valid: null });
            setDescripcion({ value: valor, valid: null });
        } catch (error) {
            console.log(error);
        }
    }


    return (

        <div className="contenedor">

            <h3>Ingrese Nuevo Video</h3>

            <form
                onSubmit={manejarNuevoVideo}
                id="formularioVideo"
            >
                <Texto  placeholder="Ingresar Titulo"  
                    id="titulo"
                    label="Titulo"
                    variant="filled"
                    fullWidth
                    required
                    margin="dense"
                    style={styles}
                    sx={{ input: { color: '#fff', fontSize: '1.8rem' } }}
                    value={titulo.value}
                    onChange={(e) => {
                        const valor = e.target.value;
                        const valido = validarTitulo(valor);

                        setTitulo({ value: valor, valid: valido })
                    }}
                    error={titulo.valid === false}
                    helperText={titulo.valid === false ? 'Campo obligatorio, ingresa al menos 5 caracteres' : ''}

                />

                <Texto placeholder="Link del video"
                    id="link-video"
                    label="Link del video"
                    variant="filled"
                    fullWidth
                    required
                    margin="dense"
                    style={styles}
                    sx={{ input: { color: '#fff', fontSize: '1.8rem' } }}
                    onChange={(e) => {

                        const valor = e.target.value;
                        const valido = validarLink(valor);

                        setLink();
                    }}
                    
                />


            


                <Texto placeholder="Link del imagen"
                
                    id="link-imagen"
                    label="Link de la imagen del video"
                    variant="filled"
                    fullWidth
                    required
                    margin="dense"
                    style={styles}
                    sx={{ input: { color: '#fff', fontSize: '1.8rem' } }}

                    
                    onChange={(e) => {
                        const valor = e.target.value;

                        setImagen({ value: valor, valid: null })
                    }}
                    value={imagen.value}
                />

                <Texto placeholder="Ingresar una descripcion"
                    id="descripcion"
                    label="Descripción"
                    rows={4}
                    variant="filled"
                    fullWidth
                    style={styles}
                    sx={{ input: { color: '#fff', fontSize: '1.8rem' } }}
                    onChange={(e) => {
                        const valor = e.target.value;
                        const valido = validarDescripcion(valor);

                        setDescripcion({ value: valor, valid: valido })
                    }}
                    value={descripcion.value}
                />

                <FormControl variant="filled" fullWidth style={styles}>
                    <InputLabel
                        style={{ color: "#fff", fontSize: "1.5rem" }}

                    >Seleccione una categoría
                    </InputLabel>

                    <CssSelect
                        value={categoria}
                        onChange={handleChange}
                        defaultValue={categoria}

                    >
                        {props.categorias.map(categoria => {

                            return <MenuItem key={categoria.id} value={categoria.titulo}>{categoria.titulo}</MenuItem>
                        })}

                    </CssSelect>
                </FormControl>

                
                <Botones reset={reset}/>

                
                
                {redirect ? <Navigate to={'/'} /> : null}
                
            </form>
            

        </div>
    )
}

export default NuevoVideo;


