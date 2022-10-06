import React, { useEffect, useState } from 'react';
import './Home.css'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Books from '../Books/Books';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");
    // Card add function
    const [card, setCard] = useState([]);
    // Api Loaded
    useEffect(() => {
        fetch(`https://api.itbook.store/1.0/search/mongodb${search}`)
        .then(res => res.json())
        .then(data => {
            setBooks(data.books);
        })
    }, [search])
    // Card delete function
    const cardDelete = (id) => {
        const bookDelete = card.filter(sb => sb.isbn13 !== id);
        setCard(bookDelete);
    }



    return (
        <div className='full-congener'>
            {/* Left side bar */}

            <div>
                {/* Input bars */}

                <div className='flex justify-center items-start mt-10'>
                    <input onChange={(e) => setSearch(e.target.value)} className='w-[500px] border rounded-xl border-violet-700 text-x pl-3 py-1 placeholder-violet-400 text-violet-500 focus:outline-none' placeholder='Search Google or type a URL' type="text" />
                    <button><MagnifyingGlassIcon className="ml-1 h-9 w-9 text-violet-700" /></button>

                </div>

                {/* Books sides */}

                <div>
                    <Books books={books} card={card} setCard={setCard}></Books>
                </div>

            </div>

            {/* Right side bar */}

            <div className='mt-10 pb-3'>
                <h1 className='text-center text-3xl font-semibold text-violet-700'>
                    Add to Card</h1>
                {
                    card.map(book => <div key={book.isbn13} className='flex items-center justify-center'>
                        <li className='text-center list-none text-violet-700 font-semibold text-xl'>
                            {book.price}
                        </li>
                        <button onClick={() => cardDelete(book.isbn13)} className='border border-black bg-violet-700 text-white rounded px-2 py-2'>X</button>
                    </div>
                    )}
                <div>

                </div>
            </div>
        </div>
    );
};

export default Home;