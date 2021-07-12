import BotonMayorInformacion from '../boton-mayor-informacion/BotonMayorInformacion'; 

interface ProductoProps {
    nombre: string;
    precio: number;
    cantidad: number;
    unidad: string;
    imagen: string
    
}

const Producto = ({nombre, precio, cantidad, unidad, imagen }:ProductoProps) => {
    return (
        <div className='col' >
            <div className='card h-100 '>
                <img className='card-img-top' src={ imagen } alt={ nombre } />
                <div className="card-body">
                </div>
                    { nombre } ${ precio} { unidad }
                <div className="foooter">            
                    <BotonMayorInformacion/>
                </div> 
            </div>
        </div>
    )
}

export default Producto;
