import WalletBox from "../walletbutton"

function RightBar () {
    return (
        <>
            <div className="w-[25vw] h-[94vh] pt-10 flex flex-col gap-4">
                <div className="flex flex-col mt-4 items-center justify-between gap-4 pb-4 rounded
                border-2 mx-16
                ">
                    <div className="w-full font-bold text-center py-[6px] px-3 rounded-t
                    text-[20px] bg-violet-700 text-[#ffffff] border-2 border-violet-700
                    "> Current Wallet Information</div>
                    <WalletBox />
                </div>
            </div>
        </>
    )
}

export default RightBar