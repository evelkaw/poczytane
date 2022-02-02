import './App.css';
import BooksQuotes from './components/BooksQuotes/BooksQuotes';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import booksData from './booksData';

function App() {
  const books = booksData.map(book => {
    return (
      <Card
        key={book.id}
        {...book}
      />
    )
  });

  return (
    <div className="App">
      <Navbar />
      <BooksQuotes />
      <div className='books'>
        {books}
      </div>
      <Footer />
    </div>
  );
}

export default App;
