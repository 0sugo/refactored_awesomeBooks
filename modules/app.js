export const addSection = document.querySelector('.list-section');

export const header = document.createElement('h2');
header.innerHTML = 'All awesome books';
addSection.appendChild(header);

export const showSection = document.createElement('div');
showSection.id = 'showsection';
    // showSection.style.backgroundColor = "grey";
addSection.appendChild(showSection);