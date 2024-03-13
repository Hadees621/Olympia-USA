import Image from 'next/image'

const BookComponent = ({ src, title, author }) => {
    return (
        <div className='p-10 flex flex-col border border-black flex-grow hover:bg-[#EFF4F7]'>
            <div lassName=' border'>
                <Image src={src} width={150} height={400} className='hover:shadow'/>
            </div>
            <div className='pt-14 font-droid-sans space-y-2 text-[12px]'>
                <p className='font-semibold'>{title}</p>
                <p className='text-[#616161]'>{author}</p>
            </div>
        </div>
    )
}

export default BookComponent
