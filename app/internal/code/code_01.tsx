import React from 'react'

type Props = {}

export default function Code_01({ }: Props) {

    return (
        <div>
            <pre id="code-container" data-language="javascript" className='pre_black'>
                <code className='code_wit'>
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
        </div>
    )
}