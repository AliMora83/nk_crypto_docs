import React from 'react'

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

               <p className='w-4/5'>Our SDK uses a Provider Pattern; meaning any component within the ThirdwebProvider will have access to the SDK. If you use the CLI to initialize your project, this is already set up for you.</p>
               <p>Let's take a look at a typical setup:</p>
               <br />
               <h2>Configure the ThirdwebProvider</h2>
               <p className='w-4/5'>Specify the network your smart contracts are deployed to in the desiredChainId prop and wrap your application like this:</p>
               <p className='font-semibold text-black pt-2'>App.jsx</p>

               <pre className='pre_black'>
                  <code className='code_wit'>
                     yarn add @thirdweb-dev/react @thirdweb-dev/sdk ethers
                  </code></pre>

            </div>

            <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='api'>
               <hr />
               <h4>Connect to a User's Wallet</h4>

               <p className='w-4/5'>Now the provider is set up, we can use all of the hooks and UI components available in the SDK, such as the ConnectWallet component.
               </p>
               <p className='w-4/5'>
                  Once the user has connected their wallet, all the calls we make to interact with contracts using the SDK will be on behalf of the user.</p>

               <p className='font-semibold text-black pt-2'>ConnectMetamaskButton.jsx</p>
               <pre className='pre_black'>
                  <code className='code_wit'>
                     yarn add @thirdweb-dev/react @thirdweb-dev/sdk ethers
                  </code></pre>
               <p className='w-4/5'>The ConnectWallet component handles everything for us, including switching networks, accounts, displaying balances and more. <br /> We can then get the connected address using the useAddress hook anywhere in the app.</p>

            </div>

            <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='api'>
               <hr />
               <h4>Interact With Contracts</h4>

               <p className='w-4/5'>Connect to your smart contract using the useContract hook like this:
               </p>

               <p className='font-semibold text-black pt-2'>pages/index.jsx</p>
               <pre className='pre_black'>
                  <code className='code_wit'>
                     yarn add @thirdweb-dev/react @thirdweb-dev/sdk ethers
                  </code></pre>
               <p className='w-4/5'>You can then use useContractRead and useContractWrite to read data and write transactions to the contract.
               </p><p className='w-4/5'>
                  You pass the contract object returned from useContract to these hooks as the first parameter and the name of the function (or view/mapping, etc.) on your smart contract as the second parameter. If your function requires parameters, you can pass them as additional arguments.
               </p><p className='w-4/5'>
                  For example, we can read the name of our contract like this:</p>
              
               <pre className='pre_black'>
                  <code className='code_wit'>
                     yarn add @thirdweb-dev/react @thirdweb-dev/sdk ethers
                  </code></pre>

            </div>

            <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='api'>
               <hr />
               <h4>Using Extensions</h4>

               <p className='w-4/5'>These hooks make it easy to interact with your smart contracts by implementing the complex logic for you under the hood.
               </p>
               <p className='w-4/5'>Each extension you implement in your smart contract unlocks new functionality in the SDK.
               </p>
               <p className='w-4/5'>For example, if your smart contract implements ERC721Supply, you unlock the ability to view all NFTs on that contract using the SDK; which fetches all of your NFT metadata and the current owner of each NFT in parallel. In the React SDK, that is available using useNFTs:
               </p>

               <p className='font-semibold text-black pt-2'>pages/index.jsx</p>
               <pre className='pre_black'>
                  <code className='code_wit'>
                     yarn add @thirdweb-dev/react @thirdweb-dev/sdk ethers
                  </code></pre>
               <p className='w-4/5'>If we want to mint an NFT and our contract implements ERC721Mintable, we can use the useMintNFT hook to mint an NFT from the connected wallet; handling all of the logic of uploading and pinning the metadata to IPFS for us behind the scenes.
               </p>
              
               <pre className='pre_black'>
                  <code className='code_wit'>
                     yarn add @thirdweb-dev/react @thirdweb-dev/sdk ethers
                  </code></pre>

            </div>

            <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='api'>
               <hr />
               <h4>UI Components</h4>

               <p className='w-4/5'>The SDK provides many UI components to help you build your application.
               </p>
               <p className='w-4/5'>For example, we can render each of the NFTs using the NFT Media Renderer component, making use of the loading state from useNFTs:
               </p>
               <p className='font-semibold text-black pt-2'>pages/index.jsx</p>
               <pre className='pre_black'>
                  <code className='code_wit'>
                     yarn add @thirdweb-dev/react @thirdweb-dev/sdk ethers
                  </code></pre>
               <p className='w-4/5'>The Web3Button component ensures the user has connected their wallet and is currently configured to the same network as your smart contract before calling the function. It also has access to the contract directly, allowing you to perform any action on your smart contract when the button is clicked.
               </p>
               <p className='w-4/5'>For example, we can mint an NFT like this:
               </p>
              
               <pre className='pre_black'>
                  <code className='code_wit'>
                     yarn add @thirdweb-dev/react @thirdweb-dev/sdk ethers
                  </code></pre>

            </div>

            <br />
            <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='api'>
               <hr />
               <h1 className=''>
                  API Guide
               </h1>
               <p className='w-4/5'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem reprehenderit ullam placeat quis deseruatus provident quibusdam dignissimos odit! Soluta ullam quisquam unde odio vel optio nobis enim a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos.</p>
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
                  <small className='pl-5 text-gray-400 text-xs'>*add Contact card</small>
               <br />

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
                  <small className='pl-5 text-gray-400 text-xs'>*add admin image</small>
               <br />

            </div>
         </div>
      </div>
   )
}

export default Internals