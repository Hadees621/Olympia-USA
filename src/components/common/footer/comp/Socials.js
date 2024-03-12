import Image from 'next/image'
import Facebook from "../../../../../public/imgs/Facebook.svg"
import Instagram from "../../../../../public/imgs/Instagram.svg"
import Piniest from "../../../../../public/imgs/Pintrest.svg"
import Twitter from "../../../../../public/imgs/Twitter.svg"
import Youtube from "../../../../../public/imgs/Youtube.svg"

const Socials = () => {
    return (
        <div className='flex gap-6'>
            <Image src={Instagram} alt='Instagram' height={32} />
            <Image src={Facebook} alt='Facebook' height={32} />
            <Image src={Youtube} alt='Youtube' height={32} />
            <Image src={Twitter} alt='Twitter' height={32} />
            <Image src={Piniest} alt='Piniest' height={32} />
        </div >
    )
}

export default Socials
