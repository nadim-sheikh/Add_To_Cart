import React from 'react';

const Nav = () => {
    return (
       <div>
         <nav className='flex justify-between py-5 px-24 bg-slate-200'>
            <div>
                <h1 className='text-3xl font-bold text-violet-700'>Demo Web</h1>
            </div>
            <div>
                <a className='text-xl font-semibold ml-4 text-violet-700' href="/home">Home</a>
                <a className='text-xl font-semibold ml-4 text-violet-700' href="/about">About</a>
                <a className='text-xl font-semibold ml-4 text-violet-700' href="/contract">Contract</a>
            </div>
        </nav>
        <hr />
       </div>
    );
};

export default Nav;