// const list = document.querySelector('#book-list ul');

// // delete books
// list.addEventListener('click', (e) => {
//   if(e.target.className == 'delete'){
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   }
// });





// Working with DOM

var titles = document.getElementsByClassName('title');

Array.from(titles).forEach(function(item){
  item.textContent = 'Isaac';
});

// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)))

Array.from(titles).forEach(function(item){
  console.log(item)
});

// Document.querySelector

const wrap = document.querySelector('#wrapper');
console.log(wrap);

const B2N = document.querySelector('#book-list li:nth-child(2) .name');
console.log(B2N);

const allBooks = document.querySelectorAll('#book-list li .name');
console.log(allBooks);

Array.from(titles).forEach(function(item){
  console.log(item)
});

// How to change and manipulate text

var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
  book.textContent = 'New Books';
});

