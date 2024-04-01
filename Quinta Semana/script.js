let total = 0;
let homens = 0;
let mulheres = 0;

function criarElementos() {
    const contadorDiv = document.getElementById('contadorDiv');

    const totalHeader = document.createElement('h2');
    totalHeader.textContent = 'TOTAL';
    contadorDiv.appendChild(totalHeader);

    const totalP = document.createElement('p');
    totalP.textContent = total;
    totalP.id = 'total';
    totalP.className = 'badge badge-light';
    contadorDiv.appendChild(totalP);

    const homensHeader = document.createElement('h3');
    homensHeader.textContent = 'Homens';
    contadorDiv.appendChild(homensHeader);

    const homensP = document.createElement('p');
    homensP.textContent = homens;
    homensP.id = 'homens';
    homensP.className = 'badge badge-light';
    contadorDiv.appendChild(homensP);

    const homemIcon = document.createElement('img');
    homemIcon.src = 'boy.png';
    homemIcon.className = 'icones';
    homemIcon.alt = 'Homem';
    contadorDiv.appendChild(homemIcon);

    const addHomemButton = document.createElement('button');
    addHomemButton.textContent = '+';
    addHomemButton.className = 'btn btn-success ml-2';
    addHomemButton.onclick = addHomem;
    contadorDiv.appendChild(addHomemButton);

    const removeHomemButton = document.createElement('button');
    removeHomemButton.textContent = '-';
    removeHomemButton.className = 'btn btn-danger ml-1';
    removeHomemButton.onclick = removeHomem;
    contadorDiv.appendChild(removeHomemButton);

    const mulheresHeader = document.createElement('h3');
    mulheresHeader.textContent = 'Mulheres';
    contadorDiv.appendChild(mulheresHeader);

    const mulheresP = document.createElement('p');
    mulheresP.textContent = mulheres;
    mulheresP.id = 'mulheres';
    mulheresP.className = 'badge badge-light';
    contadorDiv.appendChild(mulheresP);

    const mulherIcon = document.createElement('img');
    mulherIcon.src = 'girl.png';
    mulherIcon.className = 'icones';
    mulherIcon.alt = 'Mulher';
    contadorDiv.appendChild(mulherIcon);

    const addMulherButton = document.createElement('button');
    addMulherButton.textContent = '+';
    addMulherButton.className = 'btn btn-success ml-2';
    addMulherButton.onclick = addMulher;
    contadorDiv.appendChild(addMulherButton);

    const removeMulherButton = document.createElement('button');
    removeMulherButton.textContent = '-';
    removeMulherButton.className = 'btn btn-danger ml-1';
    removeMulherButton.onclick = removeMulher;
    contadorDiv.appendChild(removeMulherButton);

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    contadorDiv.appendChild(buttonContainer);

    const resetButton = document.createElement('button');
    resetButton.textContent = 'Redefinir';
    resetButton.className = 'btn btn-secondary ml-1';
    resetButton.onclick = redefinirContador;
    buttonContainer.appendChild(resetButton);
}

function atualizarContador() {
    document.getElementById('total').textContent = total;
    document.getElementById('homens').textContent = homens;
    document.getElementById('mulheres').textContent = mulheres;
}

function addHomem() {
    homens++;
    total++;
    atualizarContador();
}

function removeHomem() {
    if (homens > 0) {
        homens--;
        total--;
        atualizarContador();
    }
}

function addMulher() {
    mulheres++;
    total++;
    atualizarContador();
}

function removeMulher() {
    if (mulheres > 0) {
        mulheres--;
        total--;
        atualizarContador();
    }
}

function redefinirContador() {
    total = 0;
    homens = 0;
    mulheres = 0;
    atualizarContador();
}

criarElementos();