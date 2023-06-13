import React from 'react';

import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai";
import Table from 'react-bootstrap/Table';

const DataTable = ({ categorias, eliminarCategoria, editarCategoria }) => {

    

    return <>
        


    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Color</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
      {categorias.map((categoria, index) => {
                    console.log("categoria", categoria, index)
                    const { titulo, descripcion, colorPrimario } = categoria

                    return <tr key={index}>
                        <td>{titulo}</td>
                        <td>{descripcion}</td>
                        <td>{colorPrimario}</td>
                        <td
                            style={{ cursor: 'pointer' }}
                            
                            // onClick={() => {
                            //     editarCategoria(categoria.id);
                            // }}
                        ><AiFillEdit/></td>
                        <td 
                            style={{ cursor: 'pointer' }}
                            onClick={() => { eliminarCategoria(categoria.id) }}
                        ><AiTwotoneDelete/></td>
                    </tr>
                })}

      </tbody>
    </Table>



    </>

}

export default DataTable;