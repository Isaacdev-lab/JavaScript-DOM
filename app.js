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

// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)))

Array.from(titles).forEach(function(item){
  console.log(item)
});

// Document.querySelector

const wrap = document.querySelector('#wrapper');
console.log(wrap);

console.