import {
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';

function WalletBox(){
    return(
        <div className='flex justify-between flex-col items-center'>
            <div> this is a pop box</div>
            <WalletMultiButton />

        </div>
    )
}

export default WalletBox