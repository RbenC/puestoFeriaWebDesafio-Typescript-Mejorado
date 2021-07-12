import BotonBienvenida from '../../components/boton-bienvenida/BotonBienvenida'; 
import Productos from '../../components/productos/Productos';
import stock1 from '../../data/dataSucursal1.json';
import stock2 from '../../data/dataSucursal2.json';


interface HomeProps {
    title: string;
}

const Home = ({ title }: HomeProps) => {
    return (
        <>
            <div className="alert alert-primary">
                <img src="/logo.png" alt="logo" width="15%"/>                
                <span className="display-2 m-2">{ title }</span> 
            </div>
            <BotonBienvenida/>
            <Productos productos = {stock1} sucursal='Sucursal1' />
            <Productos productos = {stock2} sucursal='Sucursal2' />
        </>
    )
}

export default Home 