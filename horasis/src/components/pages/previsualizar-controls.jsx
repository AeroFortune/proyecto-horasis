function PreviualizarPage(){
    return(
        <section class="controls">
            <div class="control-group">
                <h3 class="Botton-name">Prenda Superior</h3>
                <img src="horasis/src/assets/clothing_preview/Sueter1.png" alt="Prenda Superior 1"></img>
                <button onclick="cambiarImagen('prenda-superior', 'horasis/src/assets/clothing_preview/Sueter1.png')">Cambiar</button>
                <img src="horasis/src/assets/clothing_preview/Sueter2.png" alt="Prenda Superior 2"></img>
                <button onclick="cambiarImagen('prenda-superior', 'horasis/src/assets/clothing_preview/Sueter2.png')">Cambiar</button>
            </div>
            <div class="control-group">
                <h3 class="Botton-name">Prenda Inferior</h3>
                <img src="horasis/src/assets/clothing_preview/Pantalon1.png" alt="Prenda Inferior 1"></img>
                <button onclick="cambiarImagen('prenda-inferior', 'horasis/src/assets/clothing_preview/Pantalon1.png')">Cambiar</button>
                <img src="horasis/src/assets/clothing_preview/Pantalon2.png" alt="Prenda Inferior 2"></img>
                <button onclick="cambiarImagen('prenda-inferior', 'horasis/src/assets/clothing_preview/Pantalon2.png')">Cambiar</button>
            </div>
            <div class="control-group">
                <h3 class="Botton-name">Calzado</h3>
                <img src="horasis/src/assets/clothing_preview/Zapatos1.png" alt="Zapatos 1"></img>
                <button onclick="cambiarImagen('zapatos', 'horasis/src/assets/clothing_preview/Zapatos1.png')">Cambiar</button>
                <img src="horasis/src/assets/clothing_preview/Zapatos2.png" alt="Zapatos 2"></img>
                <button onclick="cambiarImagen('zapatos', 'horasis/src/assets/clothing_preview/Zapatos2.png')">Cambiar</button>
            </div>
        </section>
    );
}
export default PreviualizarPage;
