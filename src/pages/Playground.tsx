// import WalletBox from "../components/walletbutton"
import { RequestAirdrop } from "../components/walletbutton/RequestAirdrop"
import SendSol from "../components/walletbutton/transaction"
/* 
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { decrement,increment } from "../store/counterSlice" */

function Playground(){

    /* const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch() */

    return (
        <div className="flex flex-col gap-4">
            
            {//test redux here
            /* <div className="font-bold text-[20px] text-violet-600">
                    Testing redux here: {count}
            </div>
            <button aria-label="Increment Value" onClick={()=>dispatch(increment())}>
                increase value by 1
            </button>
            <button aria-label="Decrement Value" onClick={()=>dispatch(decrement())}>
                decrease value by 1
            </button> */}


            <div className="pl-5 font-bold text-[30px] mt-4 text-violet-700">
                Solana Wallet Playground
            </div>
            <div className='flex w-full flex-col items-center'>
                <SendSol />
              </div>
            <div className="flex w-full flex-col items-center">
                <RequestAirdrop />
            </div>
        </div>
    )
}


export default Playground