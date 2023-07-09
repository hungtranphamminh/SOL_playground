import React from 'react';
import './App.css';
import { Wallet } from './components/walletbutton/wallet';
import HeaderBar from './components/header/HeaderBar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Route, Routes, Link} from "react-router-dom"
import Playground from './pages/Playground';
import RightBar from './components/rightinfo/RightBar';
import LeftNav from './components/leftnav/LeftNav';

function App() {
  return (
    <>
      <HeaderBar />
      <Wallet>
        <div className='flex flex-row gap-0'>
          <div className='w-[20%]'>
            <LeftNav />
          </div>
          <div className='w-[60%]'>
            <Routes>
              {/* <div>
                
                <Wallet>
                  <div className='flex w-full flex-col items-center'>
                    <WalletBox />
                    <SendSol />
                  </div>
                </Wallet>
                <ToastContainer
                  position="top-right"
                  autoClose={7000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                />
              </div> */}
              <Route path='/playground' element={<Playground/>}/>
            </Routes>
          </div>
          <RightBar />

        </div>
        
      </Wallet>
      <ToastContainer
              position="top-right"
              autoClose={7000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
    </>

  );
}

export default App;
