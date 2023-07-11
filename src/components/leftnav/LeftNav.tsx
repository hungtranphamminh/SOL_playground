import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import { useAppSelector } from "../../store/hooks"
import { selectAccountBalance } from "../../store/slices/accountSlice"

function LeftNav(){

    const walletBalance = useAppSelector(selectAccountBalance)

    return(
        <>
            <div className="h-[94vh] flex flex-col pt-10 px-5">
                <div className="font-bold text-[20px] text-violet-600">
                    Testing wallet balance redux here: {walletBalance/LAMPORTS_PER_SOL}
                </div>
            </div>
        </>
    )
}

export default LeftNav