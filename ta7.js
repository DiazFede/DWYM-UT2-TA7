function getTheTitles(books) {
    const titles = books.map(book => book.title);
    console.log(titles);
}
const books = [
    {
      title: 'Harry Potter',
      author: 'J.K. Rowling'
    },
    {
      title: 'Lord of the Rings',
      author: 'J.R.R. Tolkien'
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien'
    },
    {
        title: 'A Game of Thrones',
        author: 'George R. R. Martin'
    }
  ]
  
getTheTitles(books);