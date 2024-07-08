import img1 from '/src/assets/home_images/ImagenCarrusel_1.jpg';
import img10 from '/src/assets/home_images/ImagenCarrusel_10.jpg';
import img2 from '/src/assets/home_images/ImagenCarrusel_2.jpg';
import img3 from '/src/assets/home_images/ImagenCarrusel_3.jpg';
import img4 from '/src/assets/home_images/ImagenCarrusel_4.jpg';
import img5 from '/src/assets/home_images/ImagenCarrusel_5.jpg';
import img6 from '/src/assets/home_images/ImagenCarrusel_6.jpg';
import img7 from '/src/assets/home_images/ImagenCarrusel_7.jpg';
import img8 from '/src/assets/home_images/ImagenCarrusel_8.jpg';
import img9 from '/src/assets/home_images/ImagenCarrusel_9.jpg';


function Home() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <>
      <section className='home-page-overview'>
        <div className="slider">
          <div className="slide-track">
            {images.map((src, index) => (
              <div className="slide" key={index}>
                <img src={src} alt={`Carousel ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="highlights-first" id='highlight1'>
          <img src='/src/assets/home_images/homepage_banner1.png'></img>
          <div className='highlights-desc-container'>
            <h1>Bienvenido a Horasis</h1>
            <p>¡Bienvenido a nuestra tienda online especializada en moda! Descubre las últimas tendencias y encuentra prendas que reflejen tu estilo único. Explora nuestro catálogo y vístete con elegancia y confort, ¡todo a solo un clic de distancia!</p>

          </div>
        </div>
        <div className="highlights-second" id='highlight2'>
          <img src='/src/assets/home_images/homepage_banner2.png'></img>
          <div className='highlights-desc-container'>
            <h1>Combina, Visualiza, Realiza</h1>
            <p>Horasis ofrece una única y nunca antes vista experiencia al proveer la posibilidad de que tu, nuestro querido cliente, pueda evitar los problemas del día a día al comprar ropa en linea. Esto seria usando nuestro Preview, que puedes acceder desde cualquier lado! Pruebalo!</p>

          </div>
        </div>
        <div className="highlights-first hg-third" id='highlight3  '>
          <img src='/src/assets/home_images/homepage_banner3.png'></img>
          <div className='highlights-desc-container'>
            <h1>Ofertas</h1>
            <p>En nuestra tienda online, siempre buscamos ofrecerte las mejores ofertas en moda. Desde descuentos exclusivos hasta promociones especiales, garantizamos que puedas renovar tu armario con estilo sin comprometer tu presupuesto. ¡Explora nuestras ofertas y encuentra tus favoritos hoy mismo, a un precio cómodo!</p>

          </div>
        </div>
      </section>
    </>
  )

};


export default Home;
