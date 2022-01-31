import './App.css';
import BooksQuotes from './components/BooksQuotes/BooksQuotes';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
// import metro from './images/metro copy.jpg';
// import mapa from './images/mapa-i-terytorium copy.jpg';
// import nowy from './images/nowy-wspanialy-swiat copy.jpg';
// import mistrz from './images/mistrz-i-malgorzata.jpg';
// import eightyone from './images/1984.jpg';
import booksData from './booksData';

function App() {
  const books = booksData.map(book => {
    return <Card img={book.img} title={book.title} author={book.author} rating={book.rating}/>
  });

  return (
    <div className="App">
      <Navbar />
      <BooksQuotes />
      <div className='books'>
        {books}
      </div>
    </div>
  );
}

export default App;
