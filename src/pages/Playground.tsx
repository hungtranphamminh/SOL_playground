// import WalletBox from "../components/walletbutton"
import { RequestAirdrop } from "../components/walletbutton/RequestAirdrop"
import SendSol from "../components/walletbutton/transaction"


function Playground(){
    return (
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
        </div>
    )
}


export default Playground