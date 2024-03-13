import Image from 'next/image'
import Button from '../common/Button'

const EditorsPick = () => {
    return (
        <div>
            <p className='text-[26px] font-semibold font-droid-sans text-start'>Editors Picks</p>
            <div className='flex py-10'>
                <div className='p-10 flex flex-col border border-black flex-grow hover:bg-[#EFF4F7]'>
                    <div className=''>
                        <Image src="/assests/Books/Asset6.png" width={270} height={400} className='hover:shadow' />
                    </div>
                    <div className='pt-10 flex w-full justify-center'>
                        <Button title="READ BOOK" />
                    </div>
                </div>
                <div className='p-10 flex flex-col border border-black flex-grow hover:bg-[#EFF4F7]'>
                    <div className=''>
                        <Image src="/assests/Books/Asset6.png" width={270} height={400} className='hover:shadow' />
                    </div>
                    <div className='pt-10 flex w-full justify-center'>
                        <Button title="READ BOOK" />
                    </div>
                </div>
                <div className='p-10 flex flex-col border border-black flex-grow hover:bg-[#EFF4F7]'>
                    <div className=''>
                        <Image src="/assests/Books/Asset6.png" width={270} height={400} className='hover:shadow' />
                    </div>
                    <div className='pt-10 flex w-full justify-center'>
                        <Button title="READ BOOK" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditorsPick
