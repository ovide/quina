const SELECTED_CLASS = 'selected';  // classe que s'afegeix als nº seleccionats
const SELECTED_LIST = document.getElementById('selectedList');  // llistat de nº seleccionats

/**
* Esborra els nº seleccionats
*/
function reset() {
    // Elimina totes les classes de selecció i reseteja el llistat
     Array.from(document.getElementsByClassName('number-btn')).forEach(item => {
        item.classList.remove(SELECTED_CLASS);
    });
    SELECTED_LIST.innerHTML = "<span style=\"color:#3d3d3d\">" + 'HAN SORTIT: ' + "</span>";
}

/**
* Afegeix o elimina la classe de selecció al nº seleccionat
* @param {HTMLElement} element
*/
function toggleSelected(element) {
    element.classList.toggle(SELECTED_CLASS); // Aixó fa el toggle
    // Tornem a crear el llistat de nº seleccionats
    SELECTED_LIST.innerHTML = "<span style=\"color:#3d3d3d\">" + 'HAN SORTIT: ' + "</span>";
    const selected = [];
    Array.from(document.getElementsByClassName(SELECTED_CLASS)).forEach(item => selected.push(parseInt(item.innerText)));
     SELECTED_LIST.innerHTML += "<span style=\"color:#008081\">" + selected.sort((a, b) => a - b).join(', ') + "</span>";
}

// Crea la graella de nº fent 10 files de 10 nº cada una
const grid = document.getElementById('grid');
 for (let i = 0; i < 9; i++) {
    const row = document.createElement('div');  // Una fila
    row.classList.add('w-100', 'd-flex', 'justify-content-between', 'my-2');
    for (let j = 0; j < 10; j++) {
        const div = document.createElement('div');  // Una columna
        div.classList.add('mx-2', 'd-flex', 'number-btn', 'bola');
        const value = document.createElement('span'); // He afegit un span per si es vol millorar el botó (rounded, etc.)
        value.classList.add('m-auto');
        value.innerHTML = i * 10 + j + 1;
        div.appendChild(value);
        div.addEventListener('click', toggleSelected.bind(null, div));
        row.appendChild(div);
    }
    grid.appendChild(row);
}

reset();
