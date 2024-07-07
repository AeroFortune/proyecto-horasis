import img1 from '/src/assets/home_images/ImagenCarrusel_1.jpg';
import img2 from '/src/assets/home_images/ImagenCarrusel_2.jpg';
import img3 from '/src/assets/home_images/ImagenCarrusel_3.jpg';
import img4 from '/src/assets/home_images/ImagenCarrusel_4.jpg';
import img5 from '/src/assets/home_images/ImagenCarrusel_5.jpg';
import img6 from '/src/assets/home_images/ImagenCarrusel_6.jpg';
import img7 from '/src/assets/home_images/ImagenCarrusel_7.jpg';
import img8 from '/src/assets/home_images/ImagenCarrusel_8.jpg';
import img9 from '/src/assets/home_images/ImagenCarrusel_9.jpg';
import img10 from '/src/assets/home_images/ImagenCarrusel_10.jpg';


function Home(){
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
              <img src='https://placehold.co/600x400/000000/FFFFFF.png'></img>
              <div className='highlights-desc-container'>
              <h1>Bienvenido a Horasis</h1>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

              </div>
            </div>
            <div className="highlights-second" id='highlight2'>
              <img src='https://placehold.co/600x400/000000/FFFFFF.png'></img>
              <div className='highlights-desc-container'>
                <h1>Combina, Visualiza, Realiza</h1>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

              </div>
              </div>
            <div className="highlights-first hg-third" id='highlight3  '>
              <img src='https://placehold.co/600x400/000000/FFFFFF.png'></img>
              <div className='highlights-desc-container'>
                <h1>Ofertas</h1>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

              </div>
            </div>
        </section>
      </>
    )

};


export default Home;
