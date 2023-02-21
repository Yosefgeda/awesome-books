// Import HTML items

import {
  title, author, addBtn, addedBooks,
} from './modules/grabHtml.js';

// Import Classes

import * as classBookAll from './modules/classBook.js';

// Import Luxon

import { DateTime } from './modules/luxon.js';

// nav links

import * as contDisp from './modules/navLinks.js';

const dt = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
const dateTimeHolder = document.querySelector('.date-time-holder');
dateTimeHolder.innerHTML = dt;

// add books button event listener

let id;
addBtn.addEventListener('click', (e) => {
  if (title.value !== '' && author.value !== 0) {
    e.preventDefault();
    id = Math.floor(Math.random() * 10000);
    const bookObj = new classBookAll.Book(`"${title.value}" by`, `, ${author.value}`, id);
    classBookAll.bookList.push(bookObj);
    classBookAll.displayData();
    classBookAll.removeBook();
    classBookAll.clearValue();

    classBookAll.addToStorage(classBookAll.bookList);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  classBookAll.displayData();
  classBookAll.removeBook();
});

contDisp.formContainer.style.display = 'none';

contDisp.logo.addEventListener('click', () => {
  contDisp.mainTitle.style.display = 'block';
  contDisp.contacts.style.display = 'none';
  addedBooks.style.display = 'block';
  contDisp.formContainer.style.display = 'none';
  contDisp.mainTitle.textContent = 'All awesome books';
});

contDisp.lists.addEventListener('click', () => {
  contDisp.mainTitle.style.display = 'block';
  addedBooks.style.display = 'block';
  contDisp.formContainer.style.display = 'none';
  contDisp.mainTitle.textContent = 'All awesome books';
  contDisp.contacts.style.display = 'none';
});

contDisp.addNew.addEventListener('click', () => {
  contDisp.mainTitleHidden.style.display = 'none';
  addedBooks.style.display = 'none';
  contDisp.formContainer.style.display = 'flex';
  contDisp.contacts.style.display = 'none';
});

contDisp.contact.addEventListener('click', () => {
  contDisp.contacts.style.display = 'block';
  addedBooks.style.display = 'none';
  contDisp.formContainer.style.display = 'none';
  contDisp.mainTitleHidden.style.display = 'none';
});
