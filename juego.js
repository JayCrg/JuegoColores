function randomInt(max) {
    return Math.floor(Math.random() * max);
  }

//Aleatorizamos los colores
function getColors() {
    let r = randomInt(256);
    let g = randomInt(256);
    let b = randomInt(256);
    let rgb = [r, g, b];    
    return rgb;
}

function setColors() {
    document.getElementById("resultado").style.backgroundColor = "RGB(45, 142, 153)";
    let colorArray = [];               
    divs = document.getElementsByClassName('color')
    for (i = 0; i < divs.length; i++) {
        color = getColors();
        divs[i].style.opacity = '100%';
        divs[i].style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        colorArray.push(color);
    }
    let randomIndex = randomInt(colorArray.length);
    let randomColor = colorArray[randomIndex];
    document.getElementById('codigo').innerHTML = `RGB(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;

    // Comprobamos que el valor del atributo style del div seleccionado es igual al valor rgb que hemos guardado
    document.getElementById("resultado").innerHTML = "Esperando a que seleccione color";
    for (i = 0; i < divs.length; i++) {
        divs[i].removeAttribute("id");
        divs[i].addEventListener("click", (e) => {
            if (e.target.style.backgroundColor == `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`){
                document.getElementById("resultado").innerHTML = "Enhorabueno, has ganado";
                document.getElementById("resultado").style.backgroundColor = "green";
                e.target.style.opacity = '100%';
                e.target.setAttribute("id","ganador");
        }
            else {
                e.target.style.opacity = '0%';
                e.target.style.transition = "0.5s";
                document.getElementById("resultado").innerHTML = "Sigue intentando";
                document.getElementById("resultado").style.backgroundColor = "red";
            }
        })
    }
}

window.onload = () => {
    document.getElementsByTagName('h4')[0].addEventListener("click", setColors);
    setColors();
};

