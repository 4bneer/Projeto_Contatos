const form = document.getElementById('form')

let lines = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const tel = document.getElementById('tel');

    let line = '<tr>';
    line += `<td>${name.value}</td>`;
    line += `<td>${tel.value}</td>`;
    line += '</tr>'
    lines += line
    const contact = document.querySelector('tbody');
    contact.innerHTML = lines;

    name.value = '';
    tel.value = '';
})