// export const validarTitulo = (perro) => {
//     const length = perro.length;
//     if(length > 2 && length < 8 ){
//     return true;
// }else{
//     return false;
// }
// };/*if(length > 2 && length < 8 && titulo.includes("@")) otro ejemplo*/

// export function validarCodigo (codigo)  {
//     const length = codigo.length;
//     if(length > 2 && length < 18 ){
//         return true;
// }else{
//     return false;
// }
// };

// export function validarImagen (linkImagen) {
//     console.log(linkImagen)
// }

export const validarTitulo = (titulo) => {

    const length = titulo.length;

    if(length < 5 || titulo === '') {

        return false
    } else {
        return true
    }
}

export const validarLink = (link) => {

    // eslint-disable-next-line no-useless-escape
    const valido = link.includes('http');

    if(valido) {
        return true;
    } else {
        return false;
    }
}

export const validarDescripcion = (descripcion) => {

    const length = descripcion.length;

    if(length < 10 || descripcion === '') {

        return false
    } else {
        return true
    }
}