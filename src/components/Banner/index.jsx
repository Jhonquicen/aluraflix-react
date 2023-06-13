
import "./cuadroHome.css"


const Banner = () => {
    
    return <section className="contenedor__banner" >

        <div className="informacion__banner" style={{ backgroundImage: "url(/img/hero.png)", backgroundSize: "cover", height: "738px", width: "100%" }}>
            <div className="informacion__frontEnd">
                <button className="boton__formacion">Front End</button>
                <div className="descripcion">
                    <h3 className="subtitulo__cuadrohome">Challenge React</h3>
                    <p className="parrafo__home">Este challenge es una forma de aprendizaje.
                        Es un mecanismo donde podrás <br />comprometerte
                        en la resolución de un problema para poder
                        aplicar todos los <br />conocimientos
                        adquiridos en la formación React.</p>
                </div>
            </div>
            <img src="/img/imagen-hero.png" alt="imagen de video" className="video__cuadrohome" />

        </div>
        
        
    </section>
}

export default Banner

