import '../../../app/globals.css';
import Image from 'next/image';
import Text from './comp/Text';
import TitleP from './comp/TitleP';
import Socials from './comp/Socials';
import { footerLinks } from "@/utils/footer/links";
import Bumblebee from "../../../../public/assests/Icons/Bumblebee.png";
import AuthorHub from "../../../../public/assests/Icons/AuthorHub.png";

const Footer = () => {
    return (
        <>
            <div className='bg-footergrey w-full p-12'>
                <div className='flex justify-between mx-auto max-w-[1300px]'>
                    <div className='grid grid-cols-3 w-[50%]'>
                        {footerLinks.map((section, index) => (
                            <div key={index} className='space-y-6'>
                                <TitleP title={section.title} />
                                <div className='space-y-4'>
                                    {section.links.map((link) => (
                                        <p className='font-semibold text-[#4A4949] text-[11.5px] font-open-sans'>{link}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='space-y-6'>
                        <TitleP title='Connect' />
                        <Text text="Follow Olympia USA" />
                        <Socials />
                        <Text text="Follow Bumblebee USA" />
                        <Socials />
                        <div className='flex space-x-9 py-9'>
                            <Image src={Bumblebee} height={42} width={42} />
                            <Image src={AuthorHub} height={42} width={42} />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between mx-auto max-w-[1300px]'>
                    <div className='grid w-[50%] space-y-3'>
                        <Text text="Bumblebee Books is an imprint of Olympia Publishers" />
                        <Text text="© 2022 Ashwell Publishing Ltd | Registered in England No. 6431579" />
                    </div>
                    <div>
                        <Text text="Terms & Conditions | Privacy & Cookies Policy" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
