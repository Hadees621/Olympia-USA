import React from 'react';
import BookComponent from './BookComponent';
import { Books } from '@/utils/home/Books';
import Button from '../common/Button';

const NewReleases = () => {
  return (
    <div className='max-w-[1300px]'>
      <div className='flex justify-between items-center py-10'>
        <p className='text-[26px] font-semibold font-droid-sans'>New Releases</p>
        <Button />
      </div>
      <div className='flex items-center justify-center border border-black'>
        {Books.map((book, index) => (
          <div key={index}>
            <BookComponent
              src={book.src}
              title={book.title}
              author={book.author}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewReleases;
