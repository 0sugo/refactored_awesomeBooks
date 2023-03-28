import * as attach from './app.js';
import Books from './books.js';

import { DateTime } from './luxon.js';

const now = DateTime.now();
const date = now.toLocaleString(DateTime.DATETIME_FULL);
document.getElementById('date').textContent = dat;


function getnew (){
    const bookItem2 = new Books();
    bookItem2.retrieve();
  
  }
  
  const addButton = document.getElementById('add');
  addButton.addEventListener('click', () => {
  console.log("clicked")
    const bookItem = new Books();
    bookItem.update().retrieve();
  });
  
  const lister = document.querySelector('#lister');
  const contacter = document.querySelector('#contacter');
  const adder = document.querySelector('#unique-border');
  
  const list = document.querySelector('.list-section');
  const add = document.querySelector('.add');
  const contact = document.querySelector('.contact');
  
  lister.addEventListener('click', () => {
    list.style.display = 'block';
    add.style.display = 'none';
    contact.style.display = 'none';
    getnew();
  });
  adder.addEventListener('click', () => {
    add.style.display = 'block';
    list.style.display = 'none';
    contact.style.display = 'none';
  });
  contacter.addEventListener('click', () => {
    contact.style.display = 'flex';
    add.style.display = 'none';
    list.style.display = 'none';
  });
