import Link from 'next/link'
import React from 'react'
import logo from 'images/logo.png'
import Image from 'next/image'
import { Navbar } from 'flowbite-react'

function Header() {
  return (
    <div className='w-100 border-b-4'>
      <Navbar
        fluid={true}
        rounded={true}
        className="container"
      >
        <Navbar.Brand to="/">
          <Image
            src={logo}
            alt="Logo"
            className="w-[80px]"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars">
            Election Update +
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Candidates+
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Sign In
          </Navbar.Link>
          <Navbar.Link href="/navbars" className="bg-gradient-to-br from-red to-dark_red text-white">
            Sign Up
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header