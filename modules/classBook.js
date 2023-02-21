/* eslint-disable */
let bookList;
const title = document.getElementById('title');
const author = document.getElementById('author');
const addBtn = document.getElementById('addButton');
const addedBooks = document.getElementById('books');

class Book {
  constructor(titleOfBook, authorOfBook, id) {
    this.titleOfBook = titleOfBook;
    this.authorOfBook = authorOfBook;
    this.id = id;
  }
}

export const displayData = () => {
  const displayData = bookList.map((item) => `
          <div class='individual-book'>
            <p>${item.titleOfBook}</p>
            <p>${item.authorOfBook}</p>
            <button class='rmv-btn'data-id=${item.id}>Remove</button>
            <hr>
        </div>`);
  addedBooks.innerHTML = (displayData).join('');
};

export const clearValue = () => {
  title.value = '';
  author.value = '';
};

export const removeBook = () => {
  addedBooks.addEventListener('click', (e) => {
    if (e.target.classList.contains('rmv-btn')) {
      e.target.parentElement.remove();
    }
    const rmvBtn = e.target.dataset.id;
    removeBookArray(rmvBtn);
  });
};

export let removeBookArray = (id) => {
  bookList = bookList.filter((item) => item.id !== +id);
  addToStorage(bookList);
};

export let addToStorage = () => {
  const storage = localStorage.setItem('books', JSON.stringify(bookList));
  return storage;
};

export const getStorage = () => {
  const storage = localStorage.getItem('books') === null ? [] : JSON.parse(localStorage.getItem('books'));
  return storage;
};
bookList = getStorage();

export { Book, bookList };