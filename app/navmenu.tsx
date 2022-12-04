import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Navmenu({}: Props) {
  return (
    <div>
        <aside className="h-full p-6 sm:w-60 dark:bg-[#080a0b] dark:text-gray-100 fixed">
            <nav className="space-y-8 text-sm pt-5">
            <a href="/"> <img className='h-16' 
              src="/favicon.ico"
              alt="namka icon" /></a>
              <div className="space-y-2">
                <Link href="start">
                <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Getting Started</h2></Link>
                <div className="flex flex-col space-y-1">                  
                  <a className='a' rel="noopener noreferrer" href="#what">What is it?</a>
                  <a className='a' rel="noopener noreferrer" href="#features">Features</a>
                  <a className='a' rel="noopener noreferrer" href="#wallet">Web3 Wallet</a>
                  <a className='a' rel="noopener noreferrer" href="#matic">Free Matic</a>
                </div>
              </div>
              <div className="space-y-2">
                <Link href="user">
                <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">User Guide</h2></Link>
                <div className="flex flex-col space-y-1">
                  <a className='a' rel="noopener noreferrer" href="#visit">Visit us</a>
                  <a className='a' rel="noopener noreferrer" href="#info">Browse Info</a>
                  <a className='a' rel="noopener noreferrer" href="#draw">Go to Draw</a>
                  <a className='a' rel="noopener noreferrer" href="#check">Check Winnings</a>
                  <a className='a' rel="noopener noreferrer" href="#faq">FAQ's</a>
                </div>
              </div>
              <div className="space-y-2">
                <Link href="corp">
                <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Corporate Guide</h2></Link>
                <div className="flex flex-col space-y-1">
                  <a className='a' rel="noopener noreferrer" href="#addToWeb">Add to Website</a>
                  <a className='a' rel="noopener noreferrer" href="#cta">Add Call-to-Action</a>
                  <a className='a' rel="noopener noreferrer" href="#web3">Connect to Web3</a>
                  <a className='a' rel="noopener noreferrer" href="#whitelabel">Whitelabel Requirements</a>
                  <a className='a' rel="noopener noreferrer" href="#troubleshooting">Troubleshooting</a>
                </div>
              </div>
              <div className="space-y-2">
                <Link href="internal">
                <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Internal Guide</h2></Link>
                <div className="flex flex-col space-y-1">
                  <a className='a' rel="noopener noreferrer" href="#sdk">SDK Guide</a>
                  <a className='a' rel="noopener noreferrer" href="#api">API Guide</a>
                  <a className='a' rel="noopener noreferrer" href="#support">Support</a>
                  <br />
                  <a className='a' rel="noopener noreferrer" href="#timeline">Timeline</a>
                  <div className="space-y-1 pt-10">
                    <p className='text-xs text-gray-600'>v.0.1.02</p>
                    <p className='text-xs text-gray-600'>30 Nov 2022</p>
                    <a href="https://alimora-portfolio.vercel.app/" target="_blank">
                    <p className='a text-xs text-gray-600'>Ali Mora</p>
                    </a>
                    </div>
                </div>
              </div>
            </nav>
          </aside>
    </div>
  )
}