import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { updateAccount, disconnectWallet, selectAccountBalance } from '../../store/slices/accountSlice';
import { useEffect } from 'react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

function WalletBox(){
    const {connected,publicKey} = useWallet()
    const {connection} = useConnection()
    const dispatch = useAppDispatch()
    const walletAccount = useAppSelector((state)=>state.walletAccount)
    const walletAccountBalance = useAppSelector(selectAccountBalance)

    useEffect(()=>{
        if(!connected || !publicKey){
            dispatch(disconnectWallet())
            console.log("current wallet status - rightinfo:", walletAccount.isConnected)
        }
        else{
            connection.getAccountInfo(publicKey).then(info => {
                console.log("current account balance - rightinfo: ",info?.lamports)
                const newAccountInfo = {
                    address:publicKey.toString(),
                    balance: info?info.lamports:walletAccountBalance,
                    isConnected: true
                }
                dispatch(updateAccount(newAccountInfo))
            })
            
        }
    },[connected,publicKey])

    return(
        <div className='flex flex-col gap-3 justify-between pb-4'>
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
            {!connected?<></>:
                <div className='flex flex-col items-start gap-3 px-[6px]'>
                    <div>
                        Adress: {walletAccount.address}
                    </div>
                    <div>
                        Balance: {walletAccountBalance/LAMPORTS_PER_SOL}
                    </div>
                </div>
                }
        </div>
    )
}

export default WalletBox