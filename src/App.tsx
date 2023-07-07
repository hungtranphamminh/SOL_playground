import React from 'react';
import './App.css';
import { Wallet } from './components/walletbutton/wallet';
import WalletBox from './components/walletbutton';
import HeaderBar from './components/header/HeaderBar';
import SendSol from './components/walletbutton/transaction';

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
    </div>
  );
}

export default App;
