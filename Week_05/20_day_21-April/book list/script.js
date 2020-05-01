// Iterate through the array of books. For each book, create a p
// element with the book title and author and append it to the page.
// Bonuses:
// Use a ul and li to display the books.
// Add an img to each book that links to a URL of the book cover.
// Change the style of the book depending on whether you have
// read it or not.

var books = [
  {title: 'The Design of EveryDay Things',
   img: 'http://ecx.images-amazon.com/images/I/41j2ODGkJDL._AA115_.jpg',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
   img: 'http://ecx.images-amazon.com/images/I/41Z56GwEv9L._AA115_.jpg',
   author: 'Brian Christian',
   alreadyRead: true
  }];
    
var bookList = document.createElement('ul');
for (var i = 0; i < books.length; i++) {
  var bookItem = document.createElement('li');
  var bookImg = document.createElement('img');
  bookImg.src = books[i].img;
  bookItem.appendChild(bookImg);
  var bookDescription = document.createTextNode(books[i].title + ' by ' + books[i].author);
  bookItem.appendChild(bookDescription);
  if (books[i].alreadyRead) {
    bookItem.style.color = 'grey';
  }
  bookList.appendChild(bookItem);
}
document.body.appendChild(bookList);
