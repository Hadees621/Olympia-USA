import Image from 'next/image'
import { aboutBanner } from '@/utils/home/About'
import Button from '../common/Button'
const AboutSection = ({ heading, paragraph }) => {
    return (
        <div className='max-w-[1200px] flex py-32'>
            <div className="flex-1">
                <div className="flex flex-col h-full justify-center font-open-sans p-10 gap-10">
                    <div className='flex flex-col gap-4'>
                        <h2 className="text-3xl font-bold">{heading}</h2>
                        <p className="mt-4">{paragraph}</p>
                    </div>
                    <button className='text-[12px] px-9 py-[13px] font-semibold font-droid-sans rounded shadow bg-buttonred text-white w-[34%]'>
                        MORE ABOUT US
                    </button>
                </div>
            </div>
            <div className='flex-1'>
                <Image src={aboutBanner} width={700} height={200} alt="About Section Image" />
            </div>
        </div>
    )
}

export default AboutSection
