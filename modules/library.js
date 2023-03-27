export default class Library {
  constructor() {
    this.allBooks = [];

    if (localStorage.getItem('allBooks') !== null) {
      this.allBooks = JSON.parse(localStorage.getItem('allBooks'));
    }
  }

  addBook(title, author) {
    const book = { title, author };
    this.allBooks.push(book);
    localStorage.setItem('allBooks', JSON.stringify(this.allBooks));
    this.displayBooks();
  }

  removeBook(index) {
    this.allBooks.splice(index, 1);
    localStorage.setItem('allBooks', JSON.stringify(this.allBooks));
    this.displayBooks();
  }

  displayBooks() {
    const listB = document.getElementById('main-list');
    listB.innerHTML = '';

    this.allBooks.reverse().forEach((b, index) => {
      const div = document.createElement('div');
      div.className = 'book-list';
      const bookTitle = document.createElement('p');
      bookTitle.textContent = `${b.title} by ${b.author}`;
      div.appendChild(bookTitle);
      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', () => {
        this.removeBook(index);
      });
      div.appendChild(removeBtn);

      listB.appendChild(div);
    });
  }

  initializeForm() {
    const myForm = document.getElementById('book-form');

    myForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = myForm.title.value;
      const author = myForm.author.value;
      if (title !== '' && author !== '') {
        this.addBook(title, author);
        myForm.reset();
      }
    });
  }

  // To combine the both Initializer using init property
  init() {
    this.initializeForm();
    this.displayBooks();
  }
}