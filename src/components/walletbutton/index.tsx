import { useWallet } from '@solana/wallet-adapter-react';
import {
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';

function WalletBox(){

    const {connected} = useWallet()

    return(
        <div className='flex justify-between flex-col items-center gap-4'>
            {!connected?
                <div className='text-[20px] font-semibold text-violet-700'>
                    No wallet connectd yet
                </div>
            :<div className='text-[20px] font-semibold text-violet-700'>
                Wallet Connected
                </div>
            }
            <WalletMultiButton />
        </div>
    )
}

export default WalletBox