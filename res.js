/* const ress = JSON.parse(localStorage.getItem('ress')) || [];
const renderTwo = () => {
    const resList = document.getElementById('res-list');

    const ressTemplate = ress.map(t => '<li>' + t + '</li>');
    console.log(ressTemplate);

    resList.innerHTML = ressTemplate.join('');

    const elementos = document.querySelectorAll('#res-list li');

    elementos.forEach((elemento, i) => {
        elemento.addEventListener('click', () => {
            elemento.parentNode.removeChild(elemento);
            ress.splice(i, 1);
            actualizaTwo(ress);
            renderTwo();
        })
    });
}

const actualizaTwo = (ress) => {
    const ressstring = JSON.stringify(ress);
    localStorage.setItem('ress', ressstring);

}

window.onload = () => {
    renderTwo();
    const form = document.getElementById('res-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const res = document.getElementById('res');
        const restext = res.value;
        res.value = '';
        console.log(restext);
        ress.push(restext);
        renderTwo()
        actualizaTwo(ress);


    }

} */