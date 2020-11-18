
let progress = 0;

// Genera el problema con dos números y signo aleatorios
function random() {
    signs = ['+'];
    const rand = Math.floor(Math.random() * signs.length);

    document.getElementById('res').value ='';
    document.getElementById('num1').value = Math.floor(Math.random() * 11);
    document.getElementById('num2').value = Math.floor(Math.random() * 11);
    document.getElementById('sign').value = signs[rand];


}

// Identifica la operación y guarda el resultado
function math1() {
    let num1, num2, res;
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    if (document.getElementById('sign').value === "+"){
        res = num1 + num2;
        console.log(res);
        // document.getElementById("res").value = res;
        // document.getElementById("res2").innerHTML = res;

        // Manda el resultado a una funcion para comprobarlo
        isCorrect(res);
    }
    else if (document.getElementById('sign').value === "-") {
        res = num1 - num2;
        console.log(res);
        // document.getElementById("res").value = res;
        // document.getElementById("res2").innerHTML = res;
        isCorrect(res);
    }
    else if (document.getElementById('sign').value === "*") {
        res = num1 * num2;
        console.log(res);
        // document.getElementById("res").value = res;
        // document.getElementById("res2").innerHTML = res;
        isCorrect(res);
    }
    else if (document.getElementById('sign').value === "/") {
        res = num1 / num2;
        console.log(res);
        // document.getElementById("res").value = res;
        // document.getElementById("res2").innerHTML = res;
        isCorrect(res);
    }

}

function isCorrect(answer) {
    
    // console.log(document.getElementById('res').value);

    if(answer == document.getElementById('res').value){
        console.log('Correcto');
        progress ++;
        console.log(progress);
        document.getElementById('progress').innerHTML = progress;
        random();
    }
    else if (progress == 0) {
        document.getElementById('progress').innerHTML = progress;
        random();
        alert('no seas burro');
    }

    else {                    
        progress --;
        document.getElementById('progress').innerHTML = progress;
        random();
    }
    
}

document.addEventListener('DOMContentLoaded', ()=> {
    random();
    document.getElementById('res').focus();
    console.log(document.getElementById('num1').value);
    console.log(document.getElementById("sign").value);
    console.log(document.getElementById('num2').value);

    document.getElementById("check").onclick = math1;
    // document.getElementById("next").onclick = random;

}) 

