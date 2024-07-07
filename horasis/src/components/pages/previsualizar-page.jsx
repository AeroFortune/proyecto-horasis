import PreviualizarPage from "./previsualizar-controls";


function PreviewRopa(){
    return(
        <section class="avatar-body">
            <div class="avatar-container">
                <img id="avatar" src="horasis/src/assets/clothing_preview/modelo_base.png" alt="Avatar"></img>
                <img id="prenda-superior" src="horasis/src/assets/clothing_preview/sueter_bgless.png" alt="Prenda Superior"></img>
                <img id="prenda-inferior" src="horasis/src/assets/clothing_preview/prenda_inferior.png" alt="Prenda Inferior"></img>
                <img id="zapatos" src="horasis/src/assets/clothing_preview/zapatos.png" alt="Zapatos"></img>
            </div>
        </section>
    );
}
export default PreviewRopa
