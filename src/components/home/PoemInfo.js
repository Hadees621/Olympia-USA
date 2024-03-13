import React from 'react';

const PoemInfo = ({ title, author }) => {
    return (
        <div className="flex-1">
            <div className="flex flex-col h-full justify-start font-open-sans p-10 gap-10">
                <div className='flex flex-col gap-4'>
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <p className="mt-4">{author}</p>
                </div>
                <button className='border border-black text-[12px] px-9 py-[13px] font-semibold font-droid-sans rounded shadow hover:border-none hover:bg-buttonred hover:text-white w-[44%]'>
                    VIEW BOOK
                </button>
            </div>
        </div>
    );
};

export default PoemInfo;
