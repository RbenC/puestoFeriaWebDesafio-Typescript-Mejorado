import Producto from '../../components/producto/Producto';

interface ProductoProps {
    nombre:string;
    precio:number;
    cantidad:number;
    unidad:string;
    imagen:string;
}

interface ProductosProps {
    productos: ProductoProps[];
    sucursal:string;
}


const Productos = ({ productos, sucursal }:ProductosProps) => {
    return (
        <>
        <div className='text-center bg-warning'>{ sucursal }</div>
        <div className='row row-cols-1 row-cols-md-6'>
                {
                    productos.map((producto,i)=> 
                        <Producto 
                            key={i}
                            nombre={producto.nombre}
                            precio={producto.precio}
                            cantidad={producto.cantidad}
                            unidad={producto.unidad}
                            imagen={producto.imagen}
                        />)
                }
        </div>
        </>
    )
}

export default Productos;
