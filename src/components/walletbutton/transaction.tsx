import {  WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useWallet } from '@solana/wallet-adapter-react';

import { clusterApiUrl, Transaction, SystemProgram, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { FC, useCallback, useState } from 'react';

import { Connection } from '@solana/web3.js';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let thelamports = 0;
let theWallet = "DbcPKdcAZLPZ4NLXJTTeNDkG2yipmWXdFxJVHbN832Fz"



const SendSol: FC = () => {
    let [lamports, setLamports] = useState(.1);
    // let [wallet, setWallet] = useState("DbcPKdcAZLPZ4NLXJTTeNDkG2yipmWXdFxJVHbN832Fz");

    // const { connection } = useConnection();
    const connection = new Connection(clusterApiUrl("devnet"))
    const { publicKey, sendTransaction } = useWallet();

    const onSendRequest = (e:any) => {

        console.log(Number(e.target.value));
        setLamports(Number(e.target.value));
        lamports = e.target.value;
        thelamports = lamports;

        onClickSend()
    }
 

    const onClickSend = useCallback( async () => {

        if (!publicKey) throw new WalletNotConnectedError();
        connection.getBalance(publicKey).then((bal) => {
            console.log(bal/LAMPORTS_PER_SOL);

        });

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

        try{
            const signature = await sendTransaction(transaction, connection);
            await connection.confirmTransaction(signature, 'processed').then((message)=>{
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

    return (
        <div>
            <div>
                Nah this no navbar
            </div>
            <input value={lamports} type="number" onChange={(e) => setTheLamports(e)}></input>
            <br></br>
            <button className='btn' onClick={onClickSend}>Send Sol </button>
        </div>
    );
};




export default SendSol;