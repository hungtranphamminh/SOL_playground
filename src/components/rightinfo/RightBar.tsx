import WalletBox from "../walletbutton"

function RightBar () {
    return (
        <>
            <div className="sticky w-[20vw] h-[94vh] pt-10">
                <div className="flex flex-col m-4 items-center justify-between gap-4">
                    <WalletBox />
                </div>
            </div>
        </>
    )
}

export default RightBar