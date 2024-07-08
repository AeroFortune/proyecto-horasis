import logoWhite from '/src/assets/navigation/logo_white.svg'
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 



function Header() {

    const [search, setSearch] = useState()
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()  

        try {
            const response = await axios.get(`http://localhost:5000/products/?name=${encodeURIComponent(search)}`)
            console.log(response.data)
            if (response.status == 200){
                navigate("/search/"+search)  
                window.location.reload(     )  
            }
        } catch (error) {
            console.error('Error al buscar productos:', error); 
        }
    }

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };
    
    
    return (
        <header className="header-sitio">
            <div className='wrapper'>
                <Link to="/"  className='img-logo'><img src={logoWhite} alt="Horasis"/></Link>
                
                <form className='buscador-form' onSubmit={handleSubmit}>
                    <button className='buscador-button'><IoSearch color='white' size={"40px"} alignmentBaseline='central' enableBackground={'true'} display={'inline-block'} ></IoSearch></button>
                    <input className="buscador" type='text' onChange={(e) => setSearch(e.target.value) } placeholder='Buscar...' ></input>
                </form>

                <nav className='header-nav'>
                    <Link to="/catalogo" className='header-nav-icon'><img src='/src/assets/navigation/catalog.svg'></img>Catalogo</Link>
                    <Link to="/carrito" href='' className='header-nav-icon'><img src='/src/assets/navigation/cart.svg'></img>Carrito</Link>
                    <Link to="/preview" className='header-nav-icon'><img src='/src/assets/navigation/preview.svg'></img>Preview</Link>
                    <Link to="/perfil" className='header-nav-icon header-profile'><a href='' className='header-nav-icon'><img src='/src/assets/navigation/profile.svg'></img>Perfil</a></Link>
                    
                </nav>
            </div>
            
            
        </header>
);
}
export default Header;
