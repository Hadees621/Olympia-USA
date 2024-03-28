import React from 'react'

const SortByDropdown = ({ selectOption }) => {
    return (
        <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-md border border-gray-300 text-[10px] xl:text-[12px] 2xl:text-[15px]">
            {[1, 2, 3, 4].map((option, index) => (
                <h1 key={index} onClick={() => selectOption(`Option ${option}`)} className={`${index !== 3 ? 'border-b ' : ''} w-full p-2 xl:p-4 cursor-pointer`}>
                    {option === 3 ? 'Publication date (new - old)' : option === 4 ? 'Best sellers' : `A - Z`}
                </h1>
            ))}
        </div>
    )
}

export default SortByDropdown
