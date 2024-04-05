import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <nav className='flex flex-between fixed z-50 w-full bg-dark-1 px-6 
        py-4 lg:px-10
    '>
        <Link className='flex items-center gap-1'
            href="/"
        >
            <Image src='/icons/logo.svg'
                width={30}
                height={30}
                alt='Xoom logo'
                className='max-sm:size-10'
            />
            <p className='text-[26px] font-extrabold text-white
                max-sm:hidden
            '>Xoom</p>
        </Link> 
            <div className='flex-between gap-5 '>
                {/* clerk user managment */}
                <MobileNav/>
            </div>
    </nav>
  )
}

export default Navbar