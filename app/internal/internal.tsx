import React from 'react'
import Code_01 from './code/code_01'
import Contact01 from './contact'

type Props = {}

function Internals({ }: Props) {
   return (
      <div className='mb-10'>
         <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto mt-10 space-y-2" id='sdk'>
            <p className='mb-2 text-sm pt-10 text-[#caa969] 
        font-light tracking-wider uppercase '>
               <span className='font-bold text-[#caa969]'>04.</span> Internal Guide</p>
            <h1>How to use back end?</h1>
            <p className='text-gray-800 font-semibold'>Interact with the blockchain</p>
            <p className='w-4/5'> ThirdWeb takes care of everything between your applications and the blockchain.<br /> Read and write data from your smart contracts, listen for events, query logs and more.
            </p>

            <br />
            <hr />
            <br />
            <a href="https://thirdweb.com/" target="_blank">
               <img src="/logo.svg" alt="thirdweb" className='h-14' /></a>
            <h2>thirdweb React SDK</h2>
            <p className='p-1 flex flex-row space-x-2'>
               <img src="https://img.shields.io/npm/v/@thirdweb-dev/react?color=red&label=npm&logo=npm" alt='npm'></img>
               <img src="https://github.com/thirdweb-dev/js/actions/workflows/CI.yml/badge.svg" alt="git" />
               <img src="https://img.shields.io/discord/834227967404146718.svg?color=7289da&label=discord&logo=discord&style=flat" alt="discord" />
            </p>

            <h5>Ultimate collection of React hooks for your web3 apps</h5>
            <br />
            <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto space-y-2" id='api'>
               <h4>Installation</h4>

               <p className='w-4/5'>The easiest way to get started with the React SDK is to use the CLI:</p>
               <pre className='pre_black'>
                  <code className='code_wit'>npx thirdweb create --app</code></pre>

               <p className='w-4/5'>Alternatively, you can install the SDK into your existing project using npm or yarn:</p>
               <pre className='pre_black'>
                  <code className='code_wit'>
                     npm install @thirdweb-dev/react @thirdweb-dev/sdk ethers
                  </code></pre>

               <pre className='pre_black'>
                  <code className='code_wit'>
                     yarn add @thirdweb-dev/react @thirdweb-dev/sdk ethers
                  </code></pre>


            </div>
            <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='api'>
               <hr />
               <h4>Getting started</h4>

               <p className='w-4/5'>Our SDK uses a Provider Pattern; meaning any component within the <code className='code_gray'>ThirdwebProvider</code> will have access to the SDK. If you use the CLI to initialize your project, this is already set up for you.</p>
               <p>Let's take a look at a typical setup:</p>
               <br />
               <h4>Configure the <code className='code_gray'>ThirdwebProvider</code></h4>
               <p className='w-4/5'>Specify the network your smart contracts are deployed to in the <code className='code_gray'>desiredChainId</code> prop and wrap your application like this:</p>
               <p className='font-semibold text-black pt-2'>App.jsx</p>

               <Code_01 />

            </div>

            <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='api'>
               <hr />
               <h4>Connect to a User's Wallet</h4>

               <p className='w-4/5'>Now the provider is set up, we can use all of the hooks and UI components available in the SDK, such as the <code className='code_gray'>ConnectWallet</code> component.
               </p>
               <p className='w-4/5'>
                  Once the user has connected their wallet, all the calls we make to interact with contracts using the SDK will be on behalf of the user.</p>

               <p className='font-semibold text-black pt-2'>ConnectMetamaskButton.jsx</p>
               <pre className='pre_black'>
                  <code className='code_wit'>
                     {`
      import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

      export const YourApp = () => {
         const address = useAddress();
         return (
            <div>
            <ConnectWallet />
            </div>
         );
      };
                     `}
                  </code></pre>
               <p className='w-4/5 pb-5'>The <code className='code_gray'>ConnectWallet</code> component handles everything for us, including switching networks, accounts, displaying balances and more. <br /> We can then get the connected address using the <code className='code_gray'> useAddress</code> hook anywhere in the app.</p>

            </div>

            <hr className=''/>
            <div className='pt-10 pb-10'>
            <a href="https://portal.thirdweb.com/sdk" target="_blank" className='text-xs m-10 px-3 py-2 bg-slate-800 text-gray-300 rounded-md shadow-md hover:text-gray-100 hover:shadow-lg transition-all duration-200 ease-out'
            >Read more about thirdweb SDK here</a>
            </div>
            <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='api'>
               <hr />
               <h1 className=''>
                  API Guide
               </h1>
               <p className='w-4/5'>
                  Once we come to an agreement, you will have access to your own Web3 Contracts. We do advice that you have some development experience before making any changes.</p>

               <img src="third_api.png" alt="API" className='w-4/5 mt-5 rounded-md shadow-md' />
            </div>
          
            <br />
            <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='settings'>
               <hr />
               <h1 className=''>
                  Settings
               </h1>
               <h4 className=''>
                  Admin Controls
               </h4>
               <p className='w-4/5'>
                  Admin Wallet will have access to these Functions on the Blockchain back-end.</p>
                  <img src="/admin.png" alt="admin" className='rounded-lg ml-3 my-5 h-48 shadow-lg' />
            </div>  
            <br />
            <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='support'>
               <hr />
               <h1 className=''>
                  Support
               </h1>
               <h4 className=''>
                  Contact info
               </h4>
               <p className='w-4/5'>
                  Our contact details and where to look for more information or assistance.</p>
               <Contact01 />
               <small className='pl-5 text-gray-400 text-xs'>*add Contact card</small>
               <br />

            </div>

         </div>
      </div>
   )
}

export default Internals