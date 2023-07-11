// import WalletBox from "../components/walletbutton"
import LeftNav from "../components/leftnav/LeftNav"
import RightBar from "../components/rightinfo/RightBar"
import { RequestAirdrop } from "../components/walletbutton/RequestAirdrop"
import SendSol from "../components/walletbutton/SendTransaction"
import { SignMessage } from "../components/walletbutton/SignMessage"
import { SignTransaction } from "../components/walletbutton/SignTransaction"
/* 
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { decrement,increment } from "../store/counterSlice" */

function Playground(){

    /* const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch() */

    return (
        <div className="flex justify-between">
            <div className='w-[20%]'>
                <LeftNav />
            </div>
            <div className="flex flex-col gap-4">

                <div className="pl-5 font-bold text-[30px] mt-4 text-violet-700">
                    Solana Wallet Playground
                </div>
                <div className='flex w-full flex-col items-center'>
                    <SendSol />
                </div>
                <div className="flex w-full flex-col items-center">
                    <RequestAirdrop />
                </div>
                <div className="flex w-full flex-col items-center">
                    <SignTransaction />
                </div>
                <div className="flex w-full flex-col items-center">
                    <SignMessage />
                </div>
            </div>
            <div className="w-[30%]">
                <RightBar />
            </div>
        </div>
        
    )
}


export default Playground