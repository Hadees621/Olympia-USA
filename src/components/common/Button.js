const Button = ({ title }) => {
    return (
        <button className='text-[12px] border border-black px-9 py-[13px] font-semibold font-droid-sans rounded shadow hover:bg-buttonred hover:text-white '>
            {title}
        </button>
    )
}

export default Button
