import './App.css';
import BooksQuotes from './components/BooksQuotes/BooksQuotes';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import metro from './images/metro copy.jpg';
import mapa from './images/mapa-i-terytorium copy.jpg';
import nowy from './images/nowy-wspanialy-swiat copy.jpg';
import mistrz from './images/mistrz-i-malgorzata.jpg';
import eightyone from './images/1984.jpg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BooksQuotes />
      <div className='books'>
        <Card
          img={metro}
          title='Metrooo'
          author='DM'
          rating='4' />
        <Card
          img={mapa}
          title='Mapa'
          author='Houllebecq'
          rating='3' />
        <Card
          img={nowy}
          title='Nowy'
          author='AH'
          rating='5' />
          <Card
          img={mistrz}
          title='Mistrz'
          author='MB'
          rating='3' />
          <Card
          img={eightyone}
          title='1984'
          author='GO'
          rating='5' />
      </div>
    </div>
  );
}

export default App;
