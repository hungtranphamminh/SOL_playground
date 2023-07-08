import {
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';

function WalletBox(){
    return(
        <div className='flex justify-between flex-col items-center'>
            <div> this will be a side bar or popbox</div>
            <WalletMultiButton />

        </div>
    )
}

export default WalletBox