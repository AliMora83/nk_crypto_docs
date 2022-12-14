import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

type Props = {}

export default function Code_01({ }: Props) {


    const [value, setValue] = useState('')
    const [copy, setCopy] = useState(false)

    const state = {
        value: '',
        copied: false,
    };


    return (
        <div>
            <div className='relative'>
            <pre id="code-container" data-language="javascript" className='pre_black'>
                <code className='code_wit' aria-label='value'>
                    {`
    import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

    const App = () => {
    return (
        <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
        <YourApp />
        </ThirdwebProvider>
    );
    };
    `}
                </code>
            </pre>
            {/* CopyToClipboard */}
            <div className='absolute top-10 right-10 z-10'>
                <CopyToClipboard text={value}
                    onCopy={() => setCopy(true)}>
                    <button title="Copy" type="button" aria-label="Copy code to clipboard" className={`${copy ? 'copied' : 'copy'}`}>
                        {copy ? 'Copied' : "Copy"}
                    </button>
                </CopyToClipboard>
            </div>
        </div>
    </div>
    )
}