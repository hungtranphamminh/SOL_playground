import React from 'react';
import './App.css';
import { Wallet } from './components/walletbutton/wallet';
import WalletBox from './components/walletbutton';
import HeaderBar from './components/header/HeaderBar';
import SendSol from './components/walletbutton/transaction';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Route, Routes, Link} from "react-router-dom"
import Playground from './pages/Playground';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/playground">Playground</Link></li>
          <li><Link to="/">Homepage</Link></li>
        </ul>
      </nav>
      <Routes>
        {/* <div>
          <HeaderBar />
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
    </>

  );
}

export default App;
