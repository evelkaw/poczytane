import React from 'react';
import banner from '../../images/poczytane-banner.png';
import './BooksQuotes.css';


export default function BooksQuotes() {
    return (
        <div className='books-container'>
                <img src={banner} alt='Aldous Huxley' className='img'/>
                <h2>Przeczytane książki:</h2>
        </div>
    );
};