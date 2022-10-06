import React from 'react';
import Book from '../Book/Book';
import './Books.css';

const Books = ({ books, card, setCard }) => {

    return (
        <div>
            <div className='books-content ml-10'>
                {
                    books.map((book) => (
                        <Book card={card} setCard={setCard} book={book} key={book.isbn13}></Book>
                    ))}
            </div>
        </div>
    );
};

export default Books;