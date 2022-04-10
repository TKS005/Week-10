let btnAdd = document.querySelector('button');
let table = document.querySelector('table');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let occupationInput = document.querySelector('#weight_class');
btnAdd.addEventListener('click', () => {
    let name = nameInput.value;
    let email = emailInput.value;
    let weight_class = occupationInput.value;
    let template = `
                <tr>
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${weight_class}</td>
                </tr>`;
    table.innerHTML += template;
});