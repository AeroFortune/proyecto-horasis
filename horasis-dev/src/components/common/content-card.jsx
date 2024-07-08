import { useState } from "react";
import { Link } from 'react-router-dom';


export default function ContentCard({id, price, image_url, title}){


    const [link, setLink] = useState()

    const handleLink = () => {

    }

    return(
            <div className="content-card-overview">
                
                <div className="cc-top-block">
                    <div className="cc-image-container">
                        <Link to={"/product/" + id} className="cc-image-container-link">
                            {/* precio */}
                            <div className="cc-price-tag">
                                <p>${price}</p>
                            </div>
                            {/* imagen */}
                                <img src={image_url}>
                                </img>
                        </Link>
                    </div>

                </div>
                
                <div className="cc-bottom-block">
                    {/* titulo */}
                    <h3>{title  }</h3>
                    <div className="cc-bottom-block-buttons">
                        <button>Agregar</button>
                        <button>Provar</button>
                    </div>
                </div>
                <br></br>

            </div>
    );
}

