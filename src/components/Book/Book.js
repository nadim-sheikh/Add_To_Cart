import React from 'react';

const Book = ({ book, card, setCard }) => {
    const { title, image, isbn13, price, subtitle } = book;
    const addToCard=()=>{
        const info={
            title,
            price,
            isbn13,
            image
        }
        if(card){

            const newInfo = [...card,info];
            setCard(newInfo);
        }
        else{
            const newInfo = [info];
            setCard(newInfo);
        }
    };
    return (
        <div className='border mt-5 pb-5'>
            <img className='w-full' src={image} alt="" />
            <div className='px-5'>
                <h1 className='text-2xl text-violet-700 font-bold mb-2'>{title}</h1>
                <p className='text-lg text-gray-500'>{subtitle}</p>
                <p className='font-bold text-2xl text-violet-700'>{price}</p>
            </div>
            <button onClick={addToCard} className='text-white bg-violet-700 text-2xl rounded px-5 pb-1'>Add to cart</button>
        </div>
    );
};

export default Book;