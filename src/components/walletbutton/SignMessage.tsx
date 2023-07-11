import { FC, useCallback } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import {ed25519} from '@noble/curves/ed25519'
import {toast} from 'react-toastify'

export const SignMessage: FC = () => {
    const {publicKey, signMessage} = useWallet()

    const onSignMessage = useCallback(async ()=>{
        try{
            if(!publicKey){
                console.log("wallet not connected")
                return
            }
            if(!signMessage){
                console.log("wallet doesnt support transaction signing")
                return
            }
            const message = new TextEncoder().encode('Hello, world!')
            const signature = await signMessage(message)
            if(!ed25519.verify(signature, message, publicKey.toBytes())){
                console.log("error verifying signature")
                return
            } 
            console.log("sign message successfully")
        } catch (error:any){
            console.log("error: ", error)
        }
    },[publicKey,signMessage])

    return <>
        <button onClick={onSignMessage} disabled={!publicKey || !signMessage}>
            Sign Message
        </button>
    </>
}