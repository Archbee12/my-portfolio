import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'



import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 lg:py-12 text-white">
      <div className="container mx-auto px-4 lg:px-0 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className='text-4xl font-semibold'>
            Debbie<span className='text-accent'>.</span>
          </h1>
        </Link>

        {/* desktop nav and hire button */}
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="ml-4">Hire Me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="lg:hidden">mobile nav
        </div>
      </div>
    </header>
  )
}

export default Header