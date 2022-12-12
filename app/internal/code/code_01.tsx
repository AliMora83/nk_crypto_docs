import React from 'react'

type Props = {}

export default function Code_01({ }: Props) {

    return (
        <div>
            <pre id="code-container" data-language="javascript" className='pre_black'>
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
                </code>
            </pre>
        </div>
    )
}