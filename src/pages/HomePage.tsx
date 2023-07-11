import { FC } from "react";
import { Link } from "react-router-dom";

const HomePage:FC = () => {
    return(
        <div className="bg-[#000]">
            <div className=" text-[#fff] leading-[130%] relative flex justify-center">
                <div className="w-full h-full absolute left-0 top-0 z-10 overflow-hidden">
                   <div className="w-[80%] h-[80%] relative">
                    <img alt="" decoding="async" data-nimg="fill" sizes="100vw" srcSet="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsolana-ring.630baeb2.jpg&w=1920&q=75"
                        className="absolute w-full left-[-900px] top-[-230px]"
                        />
                   </div>
                </div>
                
                <div className="w-[600px] absolute right-0 top-0 z-10 overflow-hidden">
                    <img alt="" decoding="async" data-nimg="fill" srcSet="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsolana-ring.630baeb2.jpg&w=1920&q=75"
                    className="object-cover w-full h-full"
                    />
                </div>
                    
                <div className="w-[1160px] pt-[120px] pb-[190px] z-20 bg-transparent h-[2000px]">
                    <h1 className="text-center font-bold leading-[105%] mb-[1rem] text-[4.5rem] pt-[90px] pb-120px">
                        Powerful for developers.
                        <br/>
                        Fast for everyone.
                    </h1>
                    <div className="flex flex-wrap text-center items-center w-full flex-col">
                        <div className="w-[700px] text-center">
                            <p className=" my-[2rem] text-[1.3125rem] leading-snug">
                                Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-3 items-center">
                        <Link to="/build" className="leading-[1.25rem] text-[0.95rem] rounded-[2.25rem] text-[rgb(255,255,255)] 
                        px-[2rem] py-[1rem] font-semibold border-transparent
                        bg-gradient-to-r from-[rgb(240,135,255)] from-[-4.52%] via-[rgb(110,31,206)] via-[54.5%] to-[rgba(110,31,206,0.2)] to-[101.41%]
                        ">
                            START BUILDING
                        </Link>
                        <a href="https://docs.solana.com/" target="_blank" rel="noreferrer" className="leading-[1.25rem] text-[0.95rem] rounded-[2.25rem] text-[rgb(255,255,255)] 
                        px-[2rem] py-[1rem] font-semibold border-transparent"> 
                            READ DOCS
                        </a>
                    </div>
                </div>       
                
                
            </div>
        </div>
    )
}

export default HomePage