import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'; 
import axios from "axios";          
import Header from "../navigation/header";
import Footer from "../navigation/footer";

function ResultsPage() {

    const {name} = useParams();
    const decodedName = decodeURIComponent(name)
    const [productData, setProductData] = useState(null)

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/products/?name=${decodedName}`);
                setProductData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error)
            }
        }
                
        fetchData();

    }, []);

    if (productData == null) {
        return <p>Cargando datos...</p>;
    }   

    let resultItems = productData.map((items) => {
    let id = items._id.toString();
    return <li className="search-result-item" key={items.id}> 
        <Link to={"/product/" + id}>
            <img className="search-img" src={items.image_url}></img>
            {items.name} 
        </Link>
    </li>  
    });

    if (resultItems.length == 0){
        resultItems = <h1>No se encontraron objetos!</h1>
    }

    return (  
        <>
            <Header></Header>
            <div className="search-overview">
                <h1>Resultados de Busqueda</h1>
                <ul className="search-result-container">
                    {resultItems}     
                </ul>
            </div>
            <Footer></Footer>
        </>
    );
}

export default ResultsPage;
