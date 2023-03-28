import  {showSection} from './app.js';
export let store = JSON.parse(localStorage.getItem('stored')) || []; 
export default class Books {
  constructor(author, title) {
    this.author = author;
    this.title = title;
  }

  update() {
    const writer = document.getElementById('writer').value;
    const head = document.getElementById('head').value;

    const newObj = {
      writer,
      head,
    };
    store.push(newObj);

    localStorage.setItem('stored', JSON.stringify(store));
    return this;
  }
  added(){
    window.alert('Book has been added succesfully');
    return this;
  }

  retrieve() {
    showSection.innerHTML = '';

    const stored2 = JSON.parse(localStorage.getItem('stored'));

    stored2.forEach((stored, index) => {
      const hostBooks = document.createElement('div');
      hostBooks.id = index;
 
      showSection.append(hostBooks);

      const author = document.createElement('p');
      author.innerHTML = `Author :${stored.writer}`;
      hostBooks.append(author);

      const title = document.createElement('p');
      title.innerHTML = `Title :${stored.head}`;
      hostBooks.append(title);

      const remover = document.createElement('button');
      remover.id="remover";
      remover.innerHTML = 'Remove';
      remover.addEventListener('click', () => {
        store.splice(index, 1);
        localStorage.setItem('stored', JSON.stringify(store));
        showSection.removeChild(hostBooks);
      });
      hostBooks.append(remover);

      const line = document.createElement('hr');
      hostBooks.append(line);
      return this;
    });
  }
}