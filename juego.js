function getRandomInt(max) {
    return Math.round(Math.random() * max);
}
//Aleatorizamos los colores
function getColors(){
    let r = getRandomInt(255);
    let g = getRandomInt(255);
    let b = getRandomInt(255);
    let rgb = [r, g, b];
return rgb;
}

function setColors(){
    let colorArray = [];
    divs = document.getElementsByClassName('color')
    for(i=0; i<divs.lenght; i++){
        color = getColors();
        divs[i].style.opacity='100%';
        divs[i].style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})` ;
        console.log(divs[i].style.backgroundColor)
    }
    let randomIndex = Math.floor(Math.random() * colorArray.lenght);
    let randomColor = colorArray[randomIndex];
    /*document.getElementById('codigo').innerHTML = `RGB(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;

    // Comprobamos que el valor del atributo style del div seleccionado es igual al valor rgb que hemos guardado
    document.getElementById("resultado").innerHTML = "Esperando a que seleccione color";
    for(i=0; i<divs.lenght;i++){
        divs[i].addEventListener("click", (e) => {
            if (e.target.style.backgroundColor == `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`)
              document.getElementById("resultado").innerHTML = "Enhorabueno, has ganado";
            else
            {
                e.target.style.opacity = '0%';
                e.target.style.transition= "0.5s";
                document.getElementById("resultado").innerHTML = "Sigue intentando";
            }
        })
    }*/
}

window.onload = ()=>{
  // Generamos los nuevos colores sin tener que recargar la pagina

  let redo = document.getElementsByTagName('h4');
  redo[0].addEventListener("click", setColors);

  setColors();
};