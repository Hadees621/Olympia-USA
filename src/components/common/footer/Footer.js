import '../../../app/globals.css';
import TitleP from './comp/TitleP';
import Socials from './comp/Socials';
import { footerLinks } from "@/utils/footer/links";
import Text from './comp/Text';

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
                    </div>
                </div>
                <div className='flex justify-between mx-auto max-w-[1300px]'>
                    <div className='grid w-[50%]'>
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
