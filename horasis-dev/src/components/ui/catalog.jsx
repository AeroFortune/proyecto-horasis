import { useEffect, useState } from "react";
import ContentCard from "../common/content-card";
import axios from 'axios';
import { CiMenuBurger } from 'react-icons/ci';


function Catalog() {

    const [catalogData, setCatalogData] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded)
    }

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products/');
                setCatalogData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error)
            }
        }

        fetchData();

    }, []);

    if (catalogData == null) {
        return <p>Cargando datos...</p>;
    }

    const rows = catalogData.map(item => <ContentCard id={item._id.toString()} price={item.price} title={item.name} image_url={item.image_url} ></ContentCard>)
    const categoryName = "General"



    return (
        <div className="catalogo-overview">
            {/* para las cosas del lado izquierdo */}
            <div className="catalogo-20">
                <div className="catalog-side-nav">
                    <h1 className="side-nav-title">Categorias</h1>
                    <ul className="side-nav-content">
                        <li className="snc-category"><a role="button" onClick={handleToggle} href="#"><CiMenuBurger /> Ofertas</a></li>
                        <div className="snc-expanded" style={{ display: isExpanded ? "block" : "none" }}>
                            <ul>
                                <li className="snc-expanded-content">Nuevos</li>
                                <li className="snc-expanded-content">Descuentos</li>
                            </ul>
                        </div>
                        <li><a role="button" onClick={handleToggle} href="#">Hombres</a></li>
                        <li><a href=""><CiMenuBurger alignmentBaseline='central' display={'inline-block'} /> Mujeres</a></li>
                        <li><a href="">Niños</a></li>
                        <li><a href="">Calzados</a></li>
                        <li><a href="">Sueterés</a></li>
                        <li><a href="">Pantalones</a></li>
                    </ul>
                </div>
            </div>

            {/* para las cosas del lado derecho */}
            <div className="catalogo-80">
                <div className="catalogo-top-nav">
                    <p className="ctn-title">{categoryName}</p>
                </div>

                <div className="catalogo-content">
                    <div className="row-catalogo">
                        {rows}
                    </div>
                </div>
            </div>

        </div>


    );
}

export default Catalog;
