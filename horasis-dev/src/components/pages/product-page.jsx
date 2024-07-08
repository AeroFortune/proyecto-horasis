import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from "../hooks/auth";
import Footer from "../navigation/footer";
import Header from "../navigation/header";

function PaginaProducto() {

    const { id } = useParams();
    console.log(id)
    const [productData, setProductData] = useState(null)
    const { user, error } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/products/${id.toString()}`);
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

    const sizes = productData.sizes

    const sizeBtn = sizes.map((sizes) => {
        return <div className="producto-tallas-button">
            <label>{sizes}
                <input type="radio" name="size" value={sizes}></input>
            </label><br />
        </div>
    })

    function handleCartSubmit(e) {
        e.preventDefault()
        const productId = id
        const quantity = 1
        try {
            axios.post(`http://localhost:5000/carts/${user._id}`, { productId, quantity },).then(result => {
                console.log(result)
                if (result.status == 201) {
                    navigate('/carrito')
                }
            })
        } catch (error) {

        }

    }




    return (
        <>
            <Header></Header>
            <div className="producto-overview">
                <div className="producto-imagenes">
                    <img src={productData.image_url}></img>
                </div>
                <div className="producto-detalles">
                    <h1 className="producto-detalles-titulo">{productData.name}</h1>
                    {/* espacio para un border I guess? */}
                    <h2 className="producto-detalles-precio">${productData.price}</h2>
                    <p className="producto-detalles-descripcion">Mejora tu aventura con este sueter. Woooo <br />{productData.sizes + ""}</p>
                    <form className="producto-tallas">
                        {sizeBtn}
                    </form>
                    <button className="producto-btn" onClick={handleCartSubmit} >Agregar al Carrito</button><br />
                    <button className="producto-btn">Probar</button>
                </div>


            </div>
            <Footer></Footer>
        </>
    );
}

export default PaginaProducto;
