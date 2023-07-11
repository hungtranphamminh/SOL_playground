import { Link } from "react-router-dom";

function HeaderBar(){
    return (
        <div className="sticky w-full z-30
          bg-[rgba(0,0,0,.95)] py-[20px] top-0" >
                <div className="flex items-center gap-4 w-full
                font-bold text-[22px] text-[#ffffff] justify-between w-[1800px]
                ">
                    <img src="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogotype.e4df684f.svg&w=256&q=75"
                        alt="solana logo"
                        className="h-[22px]"
                    />
                    <div className="flex flex-row items-center justify-between gap-6
                    text-[#838895] text-[1.1rem]
                    ">
                        <Link to="/playground" className="flex flex-row items-center ">
                            Playground
                            <svg width="24" height="24">
                                <g fill="none" fill-rule="evenodd">
                                    <path d="M0 0h24v24H0z">
                                    </path>
                                    <path fill="currentColor" d="M17.293 8.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.383.03l-6-5.5a1 1 0 1 1 1.352-1.474l5.294 4.853 5.323-5.323Z">
                                    </path>
                                    </g>
                                </svg>
                        </Link>
                        <Link to="/homepage" className="flex flex-row items-center">
                            Clone
                            <svg width="24" height="24">
                                <g fill="none" fill-rule="evenodd">
                                    <path d="M0 0h24v24H0z">
                                    </path>
                                    <path fill="currentColor" d="M17.293 8.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.383.03l-6-5.5a1 1 0 1 1 1.352-1.474l5.294 4.853 5.323-5.323Z">
                                    </path>
                                    </g>
                            </svg>
                        </Link>
                        <Link to="/build" className="flex flex-row items-center">
                            Build
                            <svg width="24" height="24">
                                <g fill="none" fill-rule="evenodd">
                                    <path d="M0 0h24v24H0z">
                                    </path>
                                    <path fill="currentColor" d="M17.293 8.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.383.03l-6-5.5a1 1 0 1 1 1.352-1.474l5.294 4.853 5.323-5.323Z">
                                    </path>
                                    </g>
                            </svg>
                        </Link>
                        <Link to="/" className="flex flex-row items-center">
                            Network
                            <svg width="24" height="24">
                                <g fill="none" fill-rule="evenodd">
                                    <path d="M0 0h24v24H0z">
                                    </path>
                                    <path fill="currentColor" d="M17.293 8.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.383.03l-6-5.5a1 1 0 1 1 1.352-1.474l5.294 4.853 5.323-5.323Z">
                                    </path>
                                    </g>
                            </svg>
                        </Link>
                        <Link to="/" className="flex flex-row items-center">
                            Community
                            <svg width="24" height="24">
                                <g fill="none" fill-rule="evenodd">
                                    <path d="M0 0h24v24H0z">
                                    </path>
                                    <path fill="currentColor" d="M17.293 8.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.383.03l-6-5.5a1 1 0 1 1 1.352-1.474l5.294 4.853 5.323-5.323Z">
                                    </path>
                                    </g>
                            </svg>
                        </Link>
                    </div>
                    
                </div>
        </div>
    )
}

export default HeaderBar;