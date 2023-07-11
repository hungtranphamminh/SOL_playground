import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Transaction, TransactionInstruction } from "@solana/web3.js";
import { FC, useCallback } from "react";
import bs58 from 'bs58'

export const SignTransaction: FC = () => {
    const {connection} = useConnection()
    const {publicKey,signTransaction} = useWallet()
    const onSignTransaction = useCallback(async () => {
        try{
            if(!publicKey){
                console.log("wallet not connected")
                return
            }
            if(!signTransaction){
                console.log("wallet doesnt support transaction signing")
                return
            }
            
            const {blockhash,lastValidBlockHeight} = await connection.getLatestBlockhash()
            let transaction = new Transaction({
                feePayer:publicKey,
                blockhash,
                lastValidBlockHeight
            }).add(
                new TransactionInstruction({
                    data:Buffer.from('Sign transaction test from local host'),
                    keys:[],
                    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr')
                })
            )
            transaction = await signTransaction(transaction);
            if (!transaction.signature) throw new Error('Transaction not signed!');
            const signature = bs58.encode(transaction.signature);
            if (!transaction.verifySignatures()) throw new Error(`Transaction signature invalid! ${signature}`);
            console.log("success")
        } catch(error:any){
            console.log(error)
        }
    },[publicKey, signTransaction, connection])

    return <button onClick={onSignTransaction} disabled={!publicKey || !signTransaction}>
    Sign Transaction
</button>
}