import './App.css';

import React, { useEffect } from 'react';

import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

import Header from './components/Header/Header';
import Reset from './Pages/404';
import NuevoVideo from './Formularios/FormVideo/NuevoVideo';
import NuevaCategoria from './Formularios/FormularioCategoria/NuevaCategoria';
import Footer from './components/Footer/Footer';






function App() {

  const getCategorias = JSON.parse(localStorage.getItem('Categorias'));
  console.log("getCtaegorias",getCategorias[0])
  const getVideos = JSON.parse(localStorage.getItem('Videos'));
  console.log("getVideos",getVideos[0])

  const [categorias, setCategorias] = useState(getCategorias || [
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#6BD1FF",
      descripcion: "Formación Front End de Alura Latam"
    },
    {
      id: uuid(),
      titulo: "Back End",
      colorPrimario: "#00C86F",
      descripcion: "Formación Back End de Alura Latam"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8C2A",
      descripcion: "Formación Innovación y Gestión de Alura Latam"
    }
  ]);




  const [videos, setVideos] = useState(getVideos || [
    {
      id: uuid(),
      categoria: 'Front End',
      colorPrimario: "#6BD1FF",
      descripcion: "Formación Front End de Alura Latam",
      link: 'https://www.youtube.com/watch?v=-LmFK6skG7s',
      imagen: 'https://i.ytimg.com/vi/-LmFK6skG7s/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Front End',
      colorPrimario: "#6BD1FF",
      link: 'https://www.youtube.com/watch?v=AG2QssLpQzI',
      imagen: 'https://i.ytimg.com/vi/AG2QssLpQzI/maxresdefault.jpg'
    },
    {
      id: uuid(),
      colorPrimario: "#6BD1FF",
      categoria: 'Front End',
      link: 'https://www.youtube.com/watch?v=JJgcJ9g-a30',
      imagen: 'https://i.ytimg.com/vi/JJgcJ9g-a30/maxresdefault.jpg'
    },
    {
      id: uuid(),
      colorPrimario: "#6BD1FF",
      categoria: 'Front End',
      link: 'https://www.youtube.com/watch?v=j71g5TiMA-M',
      imagen: 'https://i.ytimg.com/vi/j71g5TiMA-M/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Back End',
      link: 'https://www.youtube.com/watch?v=Z024LSCMqFk',
      imagen: 'https://i.ytimg.com/vi/Z024LSCMqFk/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Back End',
      link: 'https://www.youtube.com/watch?v=eejIHbOk_uI',
      imagen: 'https://i.ytimg.com/vi/eejIHbOk_uI/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Back End',
      link: 'https://www.youtube.com/watch?v=3aK3Omo2RrU',
      imagen: 'https://i.ytimg.com/vi/3aK3Omo2RrU/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Innovación y Gestión',
      link: 'https://www.youtube.com/watch?v=pOYyav4qx7o',
      imagen: 'https://i.ytimg.com/vi/pOYyav4qx7o/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Innovación y Gestión',
      link: 'https://www.youtube.com/watch?v=mwNfWRsDDWE',
      imagen: 'https://i.ytimg.com/vi/mwNfWRsDDWE/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Innovación y Gestión',
      link: 'https://www.youtube.com/watch?v=vhwspfvI52k',
      imagen: 'https://i.ytimg.com/vi/vhwspfvI52k/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Innovación y Gestión',
      link: 'https://www.youtube.com/watch?v=7lnmW8fB0nM',
      imagen: 'https://i.ytimg.com/vi/7lnmW8fB0nM/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Innovación y Gestión',
      link: 'https://www.youtube.com/watch?v=pOYyav4qx7o',
      imagen: 'https://i.ytimg.com/vi/pOYyav4qx7o/maxresdefault.jpg'
    },
    {
      id: uuid(),
      categoria: 'Infraestructura',
      link: 'https://www.youtube.com/watch?v=7lnmW8fB0nM',
      imagen: 'https://i.ytimg.com/vi/7lnmW8fB0nM/maxresdefault.jpg'
    }
  ]);



  
  useEffect(() => {
    localStorage.setItem('Videos', JSON.stringify(videos));
  }, [videos]);

  useEffect(() => {
    localStorage.setItem('Categorias', JSON.stringify(categorias));
  }, [categorias]);


  const guardarVideo = (nuevoVideo) => {

    setVideos([...videos, { ...nuevoVideo, id: uuid() }]);
    console.log("estos son los videos guardado",videos)
    alert('Has guardado tu video')
  }

  function guardarCategoria(nuevaCategoria) {

    setCategorias([...categorias, { ...nuevaCategoria, id: uuid() }]);
  }

  function eliminarCategoria(id) {

    const resultado = window.confirm('¿Deseas eliminar esta categoría ?');

    if (resultado) {
      const nuevoCategorias = categorias.filter((categoria) => categoria.id !== id)

     return setCategorias(nuevoCategorias)
    }
  }


  function eliminarVideo(id) {

    const confirmar = window.confirm('¿Deseas eliminar este video?');

    if (confirmar) {
      const videoEliminado = videos.filter((video) => video.id !== id);
      return setVideos(videoEliminado);
    } else {
      return;
    }
  }

  return (

    <Router>

      <Header />

      <Routes>

        <Route
          path='/'
          element={<Home
            categorias={categorias}
            videos={videos}
            eliminarVideo={eliminarVideo}
          />}
        />

        <Route
          path='/video'
          element={<NuevoVideo
            guardarVideo={guardarVideo}
            categorias={categorias} />}
        />

        <Route
          path='/categoria'
          element={<NuevaCategoria
            guardarCategoria={guardarCategoria}
            categorias={categorias}
            eliminarCategoria={eliminarCategoria} />}
        />

        <Route path='*' element={<Reset />} />

      </Routes>

      <Footer />

    </Router>

  );
}

export default App;



