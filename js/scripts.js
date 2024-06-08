// CREAMOS LA CONSTANTE PARA IDENTIFICAR A LAS BANDERAS EN EL HTML (CON SU ID)
const flagsElement = document.getElementById("flags");


const textsToChange = document.querySelectorAll("[data-section]");


// CREAMOS LA FUNCIÓN PARA QUE EN EL MOMENTO DE CLICKAR EN LAS BANDERAS SE CAMBIE DE IDIOMA AL IDIOMA DE LA BANDERA
const changeLanguage = async language=>{
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for(const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;

    textToChange.innerHTML = texts[section][value];
    }
};

// CREAMOS UN BUCLE PARA PODER CAMBIAR EL VALOR DEL TEXTO


// CUANDO HAGAMOS CLICK EN UNA DE LAS BANDERAS, EL DOCUMENTO IRÁ A BUSCAR AL ELEMENTO PADRE DE LAS BANDERAS (SU ID CON EL DATASET)
flagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});

// data-section = CATEGORÍA DEL TEXTO
// data-value = EL PROPIO TEXTO
