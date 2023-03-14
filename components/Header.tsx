import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../public/logo.png'
import AutcompleteChar from './Autocomplete/autcomplete';

function Header() {
    return (
        <div className='w-full h-[80px] md:h-auto md:flex md:flex-col md:items-center md:gap-4 z-[1000] sticky top-0 bg-[#151515] justify-start flex items-center'>
            <div className='mx-4 '>
            <Link href='/'>
                <Image src={logo} alt='marvel-logo'  width={160} height={58} />
            </Link>
            </div>
            <div className='w-[70%] md:w-full'>
            <AutcompleteChar />
            </div>
            <div className='text-white text-lg hover:underline hover:text-zinc-600'>
            <Link href='/save' >
                saved
            </Link>
            </div>
        </div>
    );
}

export default Header;