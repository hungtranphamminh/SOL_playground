import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { TransactionSignature } from "@solana/web3.js";
import { useCallback, type FC } from "react"
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

import {toast} from 'react-toastify'

export const RequestAirdrop: FC = () => {

    const {connection} = useConnection();
    const {publicKey } = useWallet();

    const onAirdropRequest = useCallback(async () => {
        let signature: TransactionSignature | undefined = undefined;
        try {
            if (!publicKey){
                console.log("error here")
                return
            }
            signature = await connection.requestAirdrop(publicKey,LAMPORTS_PER_SOL);
            
            const id = toast.loading('Airdrop Requested')

            await connection.confirmTransaction(signature,'processed')
            .then((message) => {
                console.log("airdrop successfull")
                toast.update(id, { render: "Airdrop Successful!", type: "success", isLoading: false });
            }
                
            )
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