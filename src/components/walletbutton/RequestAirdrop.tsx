import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { TransactionSignature } from "@solana/web3.js";
import { useCallback, type FC } from "react"
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

import {toast} from 'react-toastify'
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks";


import { selectAccountBalance, updateWalletBalance } from "../../store/slices/accountSlice";


export const RequestAirdrop: FC = () => {
    const currentWalletBalance = useAppSelector(selectAccountBalance)
    
    const dispatch = useAppDispatch()

    const {connection} = useConnection();
    const {publicKey } = useWallet();

    useEffect(() => {
        if (!connection || !publicKey) return
        else {
            connection.getAccountInfo(publicKey).then(info => {
                console.log("current account balance - airdrop: ",info?.lamports)
                dispatch(updateWalletBalance(info?info.lamports:currentWalletBalance))
            })
        }
    },[connection,publicKey])


    const onAirdropRequest = useCallback(async () => {
        let signature: TransactionSignature | undefined = undefined;
        try {
            if (!publicKey){
                console.log("error here")
                return
            }

            const {
                context: { slot: minContextSlot },
                value: { blockhash, lastValidBlockHeight }
            } = await connection.getLatestBlockhashAndContext();


            signature = await connection.requestAirdrop(publicKey,LAMPORTS_PER_SOL);
            
            const id = toast.loading('Airdrop Requested')

            await connection.confirmTransaction({blockhash,lastValidBlockHeight,signature})
            .then((message) => {
                console.log("airdrop successfull")
                }
            )
            toast.update(id, { render: "Airdrop Successful!", type: "success", isLoading: false });
            await connection.getAccountInfo(publicKey)
            .then(info => {
                console.log('account info retrieved - airdrop: ', info)
                dispatch(updateWalletBalance(info?info.lamports:currentWalletBalance))
            })
        } catch (error:any) {
            console.log("error :",error)
        }
    },[publicKey,connection])

    return (
        <div>
            <button onClick={onAirdropRequest}>
                Request Airdrop
            </button>
        </div>
    )
}