import Image from 'next/image'
import React from 'react'
import Button from '../common/Button'
import PoemInfo from './poeminfo'

const PoemsComponent = () => {
    return (
        <div className='flex flex-col max-w-[1200px] border my-20'>
            <div className='flex py-20 px-10 bg-[#F9F9F9]'>
                <PoemInfo author="Victoria Leigh Bennett" title="Poems From the Northeast" />
                {/* <div className='flex-1'>
                    <Image src="/assests/Books/Asset2.png" width={700} height={200} alt="About Section Image" />
                </div> */}
            </div>
            <div className='flex py-20 px-10 bg-[#F9F9F9]'>
                {/* <div className='flex-1'>
                    <Image src="/assests/Books/Asset2.png" width={700} height={200} alt="About Section Image" />
                </div> */}
                <PoemInfo author="Kristen Mackenzie" title="To Heal the Hurt" />
            </div>
        </div>

    )
}

export default PoemsComponent
