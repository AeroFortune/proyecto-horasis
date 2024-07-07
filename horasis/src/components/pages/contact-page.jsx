import { useState } from 'react';
import axios from 'axios';
import '/src/scripts/footers.css';
import Header from '../navigation/header';
import Footer from '../navigation/footer';
    

/**
 * Componente de formulario para enviar datos al backend.
 */
const ContactPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        name: '',
        message: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/form', formData);
            console.log('Form submitted successfully:', response.data);
            setMessage(response.data.message); 
        } catch (error) {
            console.error('Error submitting form:', error);
            setMessage('Error submitting form');
        }
    };

    return (
        <>
        <Header></Header>
        <div className="contact-body">
            <form className="form-body" onSubmit={handleSubmit}>
                <section className='left-section'>
                    <h2 className="camp-title">Contactenos</h2>
                    <p className='contact-text-pag'>Necesitas entrar en contacto con nosotros? Ha pasado algo? Quieres recomendarnos algo? Por favor sientete libre de enviarnos un mensaje para que te comuniques con nosotros!</p>
                    <div className="campo-grup">
                    <label className="camp">
                        <h2 className="camp-name">Nombre</h2>
                        <input className="imputs" type="text" name="name" value={formData.name} onChange={handleChange} />
                    </label>
                    </div>
                    <div className="campo-grup">
                        <label className="camp">
                            <h2 className="camp-name">Correo:</h2>
                            <input className="imputs" type="email" name="email" value={formData.email} onChange={handleChange} />
                        </label>
                    </div>
                    <div className="campo-grup">
                        <label className="camp">
                            <h2 className="camp-name">Asunto:</h2>
                            <input className="imputs" type="text" name="subject" value={formData.subject} onChange={handleChange} />
                        </label>
                    </div>
                </section>
                <section className='right-section'>
                    <div className="campo-grup">
                        <label className="camp">
                            <h2 className="camp-name">Mensaje:</h2>
                            <textarea className="imputs message" cols="40" rows="10" name="message" value={formData.message} onChange={handleChange}></textarea>
                        </label>
                        <button className="button" type="submit">Enviar</button>
                    {message && <p>{message}</p>}
                    </div>
                </section>
            </form>
        </div>
        <Footer></Footer>
        
        </>  
    );
};

export default ContactPage;
