import React from 'react';
import './App.css';
import { Wallet } from './components/walletbutton/wallet';
import WalletBox from './components/walletbutton';
import HeaderBar from './components/header/HeaderBar';
import SendSol from './components/walletbutton/transaction';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
