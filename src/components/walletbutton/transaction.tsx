import {  WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useWallet } from '@solana/wallet-adapter-react';




import { clusterApiUrl, Transaction, SystemProgram, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { FC, useCallback, useEffect, useState } from 'react';

import { Connection } from '@solana/web3.js';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { selectAccountBalance, updateWalletBalance } from '../../store/slices/accountSlice';

let thelamports = 0;

/*  
    solflare wallet address - receiver - for testing in testnet only

*/
let theWallet = "DbcPKdcAZLPZ4NLXJTTeNDkG2yipmWXdFxJVHbN832Fz"      

const SendSol: FC = () => {

    const currentWalletBalance = useAppSelector(selectAccountBalance)
    const dispatch = useAppDispatch()


    let [lamports, setLamports] = useState(.001);

    const connection = new Connection(clusterApiUrl("testnet"),'confirmed')
    const { publicKey, sendTransaction, connected } = useWallet();

    useEffect(() => {
        if (!connection || !publicKey) return
        else {
            console.log("current connection is: ",connection)
            connection.getAccountInfo(publicKey).then(info => {
                // dispatch(changeToAmount(currentBalance))
                dispatch(updateWalletBalance(info?info.lamports:currentWalletBalance))
            })
        }
    },[connection,publicKey])


    const onClickSend = useCallback( async () => {

        if (!publicKey) throw new WalletNotConnectedError();

        let lamportsI = LAMPORTS_PER_SOL*lamports;
        console.log(publicKey.toBase58());
        console.log("lamports sending: {}", thelamports)
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: new PublicKey(theWallet),
                lamports: lamportsI,
            })
        );

        const {
            context: { slot: minContextSlot },
            value: { blockhash, lastValidBlockHeight }
        } = await connection.getLatestBlockhashAndContext();



        try{
            const signature = await sendTransaction(transaction, connection,{minContextSlot});
            await connection.confirmTransaction({blockhash,lastValidBlockHeight,signature}).then((message)=>{
                console.log(message)
                toast.success('Transaction Success!', {
                    position: "top-right",
                    autoClose: 7000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });

            });
            await connection.getAccountInfo(publicKey)
            .then(info => {
                console.log('account info retrieved: ', info)
                dispatch(updateWalletBalance(info?info.lamports:currentWalletBalance))
            })
            
        }
        catch(error){
            console.log(error)
            toast.error('Transaction Failed!', {
                position: "top-right",
                autoClose: 7000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
       
    }, [publicKey, sendTransaction, connection]);

    
    function setTheLamports(e: any)
    {
        console.log(Number(e.target.value));
        setLamports(Number(e.target.value));
        lamports = e.target.value;
        thelamports = lamports;
    }


    return connected?(
        <div className='bg-[#fff] flex flex-col items-start justify-between gap-4 mt-4 border-4 border-violet-600 pb-4 rounded-[5px]'>
            <div className='font-bold leading-6 text-[20px] w-full border-b-4 border-violet-600 p-4 bg-violet-600 text-[#ffffff]'>
                Test Section for SOL transaction
            </div>
            <div className='flex flex-col items-start justify-between gap-4 pb-4 px-4'>
                <div className='flex flex-col gap-3'>
                    <div className='font-bold text-violet-500'>
                        Input Valid Amount of SOLs
                    </div>
                    <input value={lamports} type="number" onChange={(e) => setTheLamports(e)}></input>
                </div>
                
                <button className='px-3 py-[6px] rounded-[5px] font-bold text-[white] bg-violet-600' onClick={onClickSend} disabled={!publicKey}>Send Sol </button>
            </div>
            <div className='font-semibold text-violet-500 w-[208px] text-left px-4'>
                Current SOL Balance: {currentWalletBalance}
            </div>
            
        </div>
    ) : (
    <div>Wallet not connected yet</div>
    )
};




export default SendSol;