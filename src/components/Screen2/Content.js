import React from "react";
import AboutBitcoin from "./AboutBitcoin";
import MarketStats from "./MarketStats";
import Resources from "./Resources";
import { notifyMessage } from "../../utils/notify";
import { Toaster } from "react-hot-toast";

const Content = () =>{
    return(
        <div className="mx-[24px] mt-[10px]">
            <Toaster/>
            <div>
                <button onClick={()=>notifyMessage('Trade Started')} className="text-center text-[16px] w-full h-[58px] bg-[#2752E7] hover:bg-[#2751e7de] text-white rounded-[8px]" >Trade</button>
            </div>
            <div className="mt-[20px]">
                <div className=" border-[1px] border-[#CFCFCF] w-full h-[162px] rounded-[8px] flex gap-[10px] p-[20px]">
                    <div className=" flex flex-col gap-[8px] w-full h-[100px]">
                        <div className="text-bold text-[18px]">When's the best time to buy?</div>
                        <div className="text-[16px] text-[#707070]">Timing any invesment is hard, which is why many investors use dollar cost averaging.</div>
                    </div>
                    <div className="h-[100px] flex items-end">
                        <svg width="64" height="51" viewBox="0 0 64 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="32" cy="48.5" rx="32" ry="2.5" fill="#CFCFCF" />
                            <path d="M4.82711 44.0775C6.26809 46.7676 9.32636 47.9224 9.32636 47.9224C9.32636 47.9224 10.0483 44.7157 8.60736 42.0256C7.16639 39.3354 4.10812 38.1806 4.10812 38.1806C4.10812 38.1806 3.38613 41.3874 4.82711 44.0775Z" fill="#111111" />
                            <path d="M5.81757 43.1924C8.41912 44.768 9.42107 47.8976 9.42107 47.8976C9.42107 47.8976 6.20505 48.4726 3.6035 46.897C1.00194 45.3214 0 42.1919 0 42.1919C0 42.1919 3.21601 41.6169 5.81757 43.1924Z" fill="#699CFF" />
                            <path d="M41.978 42.8457H14.5245V42.6469H41.7804V33.0041H16.8325L15.6205 30.4624L15.7986 30.3764L16.9568 32.8052H41.978V42.8457Z" fill="#111111" />
                            <path d="M18.1783 47.7168C19.3237 47.7168 20.2521 46.7822 20.2521 45.6292C20.2521 44.4762 19.3237 43.5416 18.1783 43.5416C17.033 43.5416 16.1045 44.4762 16.1045 45.6292C16.1045 46.7822 17.033 47.7168 18.1783 47.7168Z" fill="#111111" />
                            <path d="M38.6205 47.7168C39.7658 47.7168 40.6943 46.7822 40.6943 45.6292C40.6943 44.4762 39.7658 43.5416 38.6205 43.5416C37.4751 43.5416 36.5466 44.4762 36.5466 45.6292C36.5466 46.7822 37.4751 47.7168 38.6205 47.7168Z" fill="#111111" />
                            <path d="M62.7162 2.58466C63.4252 2.58466 64 2.00607 64 1.29233C64 0.578598 63.4252 0 62.7162 0C62.0071 0 61.4324 0.578598 61.4324 1.29233C61.4324 2.00607 62.0071 2.58466 62.7162 2.58466Z" fill="#111111" />
                            <path d="M44.9142 29.7236H14.0564L7.37952 7.75397H51.7904L51.75 7.88323L44.9142 29.7236ZM14.2025 29.5248H44.7694L51.5212 7.95278H7.64646L14.2025 29.5248Z" fill="#111111" />
                            <path d="M42.5055 28.5804H15.4019L9.53735 9.09596H48.545L48.5095 9.21069L42.5055 28.5804Z" fill="#F2F2F2" />
                            <path d="M52.3438 5.79118L52.1528 5.74017L53.4561 0.795166H61.0375V0.994042H53.6081L52.3438 5.79118Z" fill="#111111" />
                            <path d="M49.5712 14.4144H9.53723V14.6132H49.5712V14.4144Z" fill="#111111" />
                            <path d="M47.2786 21.7394H11.7634V21.9382H47.2786V21.7394Z" fill="#111111" />
                            <path d="M29.6831 7.85338H29.4856V29.6242H29.6831V7.85338Z" fill="#111111" />
                            <path d="M38.5258 7.8471L37.108 29.6174L37.3052 29.6304L38.7229 7.86011L38.5258 7.8471Z" fill="#111111" />
                            <path d="M20.647 7.84696L20.4498 7.85989L21.8594 29.6307L22.0565 29.6178L20.647 7.84696Z" fill="#111111" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-[32px] mt-[24px]">
                <AboutBitcoin/>
                <Resources/>
                <MarketStats/>
            </div>
     
        </div>
    )
}

export default Content;