// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';


// const primary = "#000";

// export default function Error() {
//     return (
//         <Box
//             className="contenedor"
//             sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 flexDirection: 'column',
//                 minHeight: '100vh',
//                 backgroundColor: primary,
//             }}
//         >
//             <Typography variant="h1" style={{ color: 'white', fontSize: '10rem' }}>
//                 404
//             </Typography>
//             <Typography variant="h6" style={{ color: 'white', fontSize: '1.8rem' }}>
//                 Ups! No pudimos encontrar la página
//             </Typography>

//             <Link to={"/"} style={{ color: "#fff", fontSize: '1.5rem', marginTop: '2rem' }}>Volver a la página principal</Link>

//         </Box>
//     );
// }

import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const primary = "#000";

const Reset = () => {


    return (
        <Box
            className="contenedor"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundColor: primary,
            }}
        >
            <Typography>
            <div>
                <img src='/img/404.png' style={{width:'300px'}} alt='error'/>
            </div>
            </Typography>
            
            <Typography variant="h6" style={{ color: 'white', fontSize: '1.8rem' }}>
                Esta pagina no existe
            </Typography>

            <Link to={"/"} style={{ color: "red", fontSize: '1.5rem', marginTop: '2rem', textDecoration: 'none'}}>Volver </Link>

        </Box>
    );
}


export default Reset